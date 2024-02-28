import '../styles/answer-title-timer.scss'
import { Exam } from '../types/ExamType'
import { Timer } from './Timer'

interface AnswerTitleTimerProps {
  exam: Exam
}

const AnswerTitleTimer = ({ exam }: AnswerTitleTimerProps) => {
  return (
    <div className="answer-title-timer">
      <h1>{exam.name}</h1>
      <Timer />
    </div>
  )
}

export default AnswerTitleTimer