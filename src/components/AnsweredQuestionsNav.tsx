import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app-context'

import '../styles/answered-questions-nav.scss'
import { Exam } from '../types/ExamType'
import { Pen, Pencil } from 'lucide-react'

interface AnsweredQuestionsNavProps {
  examId: number
}

const AnsweredQuestionsNav = ({ examId }: AnsweredQuestionsNavProps) => {

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
            <a href="#" className={exam.id === examId ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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