import { useParams } from 'react-router'
import HeaderAnswer from '../components/HeaderAnswer'
import Container from '../components/Container'
import AnswerTitleTimer from '../components/AnswerTitleTimer'
import { useContext, useState } from 'react'
import { AppContext } from '../context/app-context'
import AnswerQuestion from '../components/AnswerQuestion'
import AnswerNavigation from '../components/AnswerNavigation'

const Answer = () => {
  console.log(useParams())

  const { examId } = useParams()
  const { findExamById } = useContext(AppContext)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handlePreviousQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const exam = findExamById(Number(examId))

  return (
    <>
      <HeaderAnswer />
      <Container>
        <AnswerTitleTimer exam={exam} />
        <AnswerQuestion index={currentIndex} exam={exam} onNext={handleNextQuestion} />
        <hr />
        <AnswerNavigation isFirst={currentIndex === 0} isLast={currentIndex === exam.questions.length - 1} onPrevious={handlePreviousQuestion} onNext={handleNextQuestion} />
      </Container>
    </>
  )

}

export default Answer