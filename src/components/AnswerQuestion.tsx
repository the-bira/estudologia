import { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import TextArea from '../ui/TextArea'
import { AppContext } from '../context/app-context'
import { Exam } from '../types/ExamType'

import '../styles/answer-question.scss'
import Modal from './Modal'
import { useNavigate } from 'react-router'

interface AnswerQuestionProps {
  exam: Exam
  index: number
  onNext: () => void
}

const AnswerQuestion = ({ index, exam, onNext }: AnswerQuestionProps) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { answerQuestion, getAnswerByExamIdAndQuestionIndex, finishExam } = useContext(AppContext)
  const [answer, setAnswer] = useState('')

  const isLastQuestion = index === exam.questions.length - 1
  const hasAnswered = getAnswerByExamIdAndQuestionIndex(exam.id, index)

  const navigate = useNavigate()

  const handleAnswerQuestion = () => {
    answerQuestion(exam.id, index, answer)
    if (isLastQuestion) {
      openModal()
      finishExam(exam.id)
      return
    }
    onNext()
  }

  useEffect(() => {
    setAnswer(getAnswerByExamIdAndQuestionIndex(exam.id, index))
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

      <Modal isOpen={isModalOpen} onClose={closeModal} time={10} onClick={() => navigate('/')} />

    </div>
  )
}

export default AnswerQuestion