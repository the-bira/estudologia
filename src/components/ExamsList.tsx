import { useContext } from 'react'
import { StatusType } from '../types/ExamType'
import { AppContext } from '../context/app-context'
import Exam from './Exam'

import '../styles/exams-list.scss'

interface ExamsListProps {
  status?: StatusType
}

const ExamList = ({ status }: ExamsListProps) => {

  const { filterExamsByStatus, exams } = useContext(AppContext)
  return (
    <div className="exams-list">
      {status && status === 'NAO_RESPONDIDO' ?
        filterExamsByStatus(status).map((exam) => {
          return (
            <Exam key={exam.id} title={exam.name} status={status} total={exam.questions.length} />
          )
        })
        :
        exams.map((exam) => {
          return (
            <Exam key={exam.id} title={exam.name} status={exam.status} total={exam.questions.length} />
          )
        })
      }
    </div>
  )
}

export default ExamList