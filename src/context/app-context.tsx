import { createContext, useState } from 'react'
import { Exam, StatusType } from '../types/ExamType'

type AppContextType = {
  exams: Exam[]
  filterExamsByStatus: (status: StatusType) => Exam[]
  answerQuestion: (examId: number, questionIndex: number, answer: string) => void
  startExamTimer: (examId: number) => void
  finishExam: (examId: number) => void
  findExamById: (examId: number) => Exam | undefined
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider = ({ children, initialExams }: { children: React.ReactNode, initialExams: Exam[] }) => {
  const [exams, setExams] = useState(initialExams)

  const filterExamsByStatus = (status: StatusType) => exams.filter((exam) => exam.status === status)

  const answerQuestion = (examId: number, questionIndex: number, answer: string) => {
    setExams((prevExams) => {
      const examIndex = prevExams.findIndex((exam) => exam.id === examId)

      if (examIndex === -1) {
        console.error(`Exame com ID ${examId} não encontrado.`)
        return prevExams
      }

      const updatedExams = [...prevExams]
      updatedExams[examIndex] = {
        ...updatedExams[examIndex],
        questions: updatedExams[examIndex].questions.map((question, index) =>
          index === questionIndex ? { ...question, answer } : question
        ),
      }

      console.log(updatedExams)

      return updatedExams
    })
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
    setExams((prevExams) =>
      prevExams.map((exam) =>
        exam.id === examId && exam.status === 'EM_ANDAMENTO'
          ? {
            ...exam,
            status: 'RESPONDIDO',
            timeAnswer: exam.timeSeconds
          }
          : exam
      )
    )
  }

  return (
    <AppContext.Provider value={{ exams, filterExamsByStatus, answerQuestion, startExamTimer, finishExam, findExamById }}>
      {children}
    </AppContext.Provider>
  )
}
