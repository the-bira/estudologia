import { useContext, useEffect, useState } from 'react'
import AnsweredQuestions from './AnsweredQuestions'
import AnsweredQuestionsNav from './AnsweredQuestionsNav'
import { AppContext } from '../context/app-context'
import { Exam } from '../types/ExamType'

const Answered = () => {
  const { filterExamsByStatus } = useContext(AppContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exams, setExams] = useState<Exam[]>([])
  const [activeExamId, setActiveExamId] = useState<number | null>(null)

  const handleExamClick = (examId: number) => {
    setActiveExamId(examId)
  }

  useEffect(() => {
    const filteredExams = filterExamsByStatus('RESPONDIDO')
    setExams(filteredExams)

    if (filteredExams.length > 0) {
      if (!filteredExams.find((exam) => exam.id === activeExamId)) {
        setActiveExamId(null)
      } else if (!activeExamId) {
        setActiveExamId(filteredExams[0].id)
      }
    }
  }, [activeExamId, filterExamsByStatus])

  return (
    <>
      <AnsweredQuestionsNav examIdActive={activeExamId} onExamClick={handleExamClick} />
      {activeExamId && <AnsweredQuestions examId={activeExamId} />}
    </>
  )
}

export default Answered
