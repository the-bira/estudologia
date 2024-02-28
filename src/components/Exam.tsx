import { Pen } from 'lucide-react'
import "../styles/exam.scss"
import { Button } from '../ui/Button'
import Status from './Status'
import { StatusType } from '../types/ExamType'

interface ExamType {
  title: string
  status: StatusType
  total: number
}

const Exam = ({ title, status, total }: ExamType) => {

  status = 'NAO_RESPONDIDO'

  return (
    <div className="exam">
      <Pen className='primary' width={18} />

      <h1>{title}</h1>

      <Status status={status} />

      <span>{total} questões</span>

      <Button text="Responder" className="button" onClick={() => { }} />


    </div>
  )

}

export default Exam