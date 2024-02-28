import { useContext } from 'react'
import { StatusType } from '../types/ExamType'
import { AppContext } from '../context/app-context'
import Exam from './Exam'

import '../styles/exams-list.scss'

interface ExamListProps {
  showOnlyUnanswered: boolean
}
const ExamList = ({ showOnlyUnanswered }: ExamListProps) => {

  const { filterExamsByStatus, exams } = useContext(AppContext)
  const filteredExams = showOnlyUnanswered
    ? filterExamsByStatus('NAO_RESPONDIDO')
    : exams

  return (
    <div className="exams-list">
      {filteredExams.map((exam) => (
        <Exam key={exam.id} id={exam.id} title={exam.name} status={exam.status} total={exam.questions.length} />
      ))}
    </div>
  )
}

export default ExamList