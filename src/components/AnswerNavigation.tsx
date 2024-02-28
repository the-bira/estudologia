import { MoveRight, MoveLeft } from 'lucide-react'

interface AnswerNavigationProps {
  isFirst: boolean
  isLast: boolean
  onPrevious: () => void
  onNext: () => void
}

import '../styles/answer-navigation.scss'

const AnswerNavigation = ({ isFirst, isLast, onPrevious, onNext }: AnswerNavigationProps) => {
  return (
    <div className="answer-navigation">
      <div className="move-left" style={{ visibility: isFirst ? 'hidden' : 'visible' }} onClick={onPrevious}>
        <MoveLeft />
        Anterior
      </div>

      <div className="move-right" style={{ visibility: isLast ? 'hidden' : 'visible' }} onClick={onNext}>
        Proximo
        <MoveRight />
      </div>
    </div>
  )
}

export default AnswerNavigation