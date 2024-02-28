import { useContext } from 'react'
import { AppContext } from '../context/app-context'

interface AnsweredQuestionsProps {
  examId: number
}

import '../styles/answered-questions.scss'

const AnsweredQuestions = ({ examId }: AnsweredQuestionsProps) => {
  const { getAnswerByExamIdAndQuestionIndex, findExamById } = useContext(AppContext)

  const exam = findExamById(examId)

  return (
    <div className="answered-questions">
      {exam?.questions.map((question, index) => (
        <>
          <h1>{question.title}</h1>
          <span> Resposta :</span>
          <p>{getAnswerByExamIdAndQuestionIndex(examId, index)}</p>
        </>
      ))}
    </div>
  )
}

export default AnsweredQuestions