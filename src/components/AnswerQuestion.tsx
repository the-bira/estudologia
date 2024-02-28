import { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import TextArea from '../ui/TextArea'
import { AppContext } from '../context/app-context'
import { Exam } from '../types/ExamType'

import '../styles/answer-question.scss'

interface AnswerQuestionProps {
  exam: Exam
  index: number
  onNext: () => void
}

const AnswerQuestion = ({ index, exam, onNext }: AnswerQuestionProps) => {

  console.log(exam)

  const { answerQuestion } = useContext(AppContext)
  const [answer, setAnswer] = useState('')

  const isLastQuestion = index === exam.questions.length - 1
  const hasAnswered = exam.questions[index].answer !== null

  const handleAnswerQuestion = () => {
    answerQuestion(exam.id, index, answer)
    onNext()
  }

  useEffect(() => {
    console.log('index changed', index)
    console.log(exam.questions[index].answer)
    setAnswer(hasAnswered ? exam.questions[index].answer : '')
  }, [index])

  return (
    <div className="answer-question-container">
      <h1>TÍTULO DA PERGUNTA {index + 1}/{exam.questions.length}</h1>

      <p> {exam.questions[index].title}</p>

      {hasAnswered ? (
        <TextArea
          label="Resposta dada"
          maxLength={300}
          value={answer}
        />
      ) : (
        <TextArea
          label="Escreva sua resposta aqui"
          maxLength={300}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      )}

      <Button
        text={isLastQuestion ? 'Enviar Resposta e finalizar' : 'Enviar Resposta'}
        className="button"
        onClick={handleAnswerQuestion} />

    </div>
  )
}

export default AnswerQuestion