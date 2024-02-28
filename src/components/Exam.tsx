import { Pen } from 'lucide-react'
import "../styles/exam.scss"
import { Button } from '../ui/Button'
import Status from './Status'
import { StatusType } from '../types/ExamType'
import { useNavigate } from 'react-router-dom'

interface ExamType {
  id: number
  title: string
  status: StatusType
  total: number
}

const Exam = ({ id, title, status, total }: ExamType) => {

  const navigate = useNavigate()

  return (
    <div className="exam">
      <Pen className='primary' width={18} />

      <h1>{title}</h1>

      <Status status={status} />

      <span>{total} questões</span>

      <Button text="Responder" className="button" onClick={() => { navigate(`/${id}`) }} disabled={status !== 'NAO_RESPONDIDO'} />


    </div>
  )

}

export default Exam