import { Pen } from 'lucide-react'
import "../styles/exam.scss"
import { Button } from '../ui/Button'
import Status from './Status'

interface ExamType {
  title: string
  status: string
  total: number
}

const Exam = ({ title, status, total }: ExamType) => {

  status = 'nao_respondido'

  return (
    <div className="exam">
      <Pen className='primary' />

      <h1>{title}</h1>

      <Status status={status} />

      <span>{total} questões</span>

      <Button text="Responder" className="button" onClick={() => { }} />


    </div>
  )

}

export default Exam