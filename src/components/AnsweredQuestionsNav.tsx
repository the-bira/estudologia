import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app-context'

import '../styles/answered-questions-nav.scss'
import { Exam } from '../types/ExamType'
import { Pen } from 'lucide-react'

interface AnsweredQuestionsNavProps {
  examIdActive: number | null
  onExamClick: (examId: number) => void

}

const AnsweredQuestionsNav = ({ examIdActive, onExamClick }: AnsweredQuestionsNavProps) => {

  const { filterExamsByStatus } = useContext(AppContext)
  const [exams, setExams] = useState<Exam[]>([])
  const status = 'RESPONDIDO'

  useEffect(() => {
    const filteredExams = filterExamsByStatus(status)
    setExams(filteredExams)
  }, [])
  return (
    <nav>
      <ul className='answered-questions-nav'>
        {exams.map((exam) => (
          <li key={exam.id}>
            <a href="#"
              className={exam.id === examIdActive ? 'active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              onClick={() => onExamClick(exam.id)}
            >
              <Pen width={18} />
              {exam.name}
            </a>
          </li>

        ))}
      </ul>
    </nav>

  )
}

export default AnsweredQuestionsNav