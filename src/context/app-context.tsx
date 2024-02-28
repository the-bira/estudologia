import { createContext, useState } from 'react'
import { Exam, StatusType } from '../types/ExamType'

type AppContextType = {
  exams: Exam[]
  filterExamsByStatus: (status: StatusType) => Exam[]
  answerQuestion: (examId: number, questionIndex: number, answer: string) => void
  getAnswerByExamIdAndQuestionIndex: (examId: number, questionIndex: number) => string
  startExamTimer: (examId: number) => void
  finishExam: (examId: number) => void
  findExamById: (examId: number) => Exam | undefined
}

type QuestionAnswered = {
  examId: number
  questionIndex: number
  answer: string
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider = ({ children, initialExams }: { children: React.ReactNode, initialExams: Exam[] }) => {
  const [exams, setExams] = useState(initialExams)
  const [questionAnswered, setQuestionAnswered] = useState<QuestionAnswered[]>([])

  const filterExamsByStatus = (status: StatusType) => exams.filter((exam) => exam.status === status)

  const answerQuestion = (examId: number, questionIndex: number, answer: string) => {
    const answered = questionAnswered.find(
      (question) => question.examId === examId && question.questionIndex === questionIndex
    )

    if (!answered) {
      setQuestionAnswered([
        ...questionAnswered,
        { examId, questionIndex, answer }
      ])
    } else {
      setQuestionAnswered(
        questionAnswered.map((question) =>
          question.examId === examId && question.questionIndex === questionIndex ? { ...question, answer } : question
        )
      )
    }

  }

  const getAnswerByExamIdAndQuestionIndex = (examId: number, questionIndex: number) => {
    const answered = questionAnswered.find(
      (question) => question.examId === examId && question.questionIndex === questionIndex
    )

    if (answered) {
      return answered.answer
    }

    return ''
  }



  const findExamById = (examId: number) => initialExams.find((exam) => exam.id === examId)

  const startExamTimer = (examId: number) => {
    const examToStart = initialExams.find((exam) => exam.id === examId)

    if (examToStart) {
      setExams((prevExams) =>
        prevExams.map((exam) =>
          exam.id === examId && exam.status === 'NAO_RESPONDIDO'
            ? {
              ...exam,
              status: 'EM_ANDAMENTO',
              timeAnswer: 0
            }
            : exam
        )
      )

      const intervalId = setInterval(() => {
        setExams((prevExams) =>
          prevExams.map((exam) =>
            exam.id === examId && exam.status === 'EM_ANDAMENTO'
              ? {
                ...exam,
                timeAnswer: exam.timeAnswer + 1
              }
              : exam
          )
        )
      }, 1000)

      setTimeout(() => {
        clearInterval(intervalId)
        setExams((prevExams) =>
          prevExams.map((exam) =>
            exam.id === examId && exam.status === 'EM_ANDAMENTO'
              ? {
                ...exam,
                status: 'NAO_RESPONDIDO'
              }
              : exam
          )
        )
      }, (examToStart.timeSeconds || 0) * 1000)
    }
  }

  const finishExam = (examId: number) => {
    const examIndex = exams.findIndex((exam) => exam.id === examId)
    const examToFinish = exams.find((exam) => exam.id === examId)
    if (examToFinish) {
      examToFinish.status = 'RESPONDIDO'
      initialExams[examIndex] = examToFinish

      setExams(initialExams)
    }






  }

  return (
    <AppContext.Provider value={{ exams, filterExamsByStatus, answerQuestion, startExamTimer, finishExam, findExamById, getAnswerByExamIdAndQuestionIndex }}>
      {children}
    </AppContext.Provider>
  )
}
