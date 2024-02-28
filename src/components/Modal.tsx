import { Clock } from 'lucide-react'
import trofeu from '../assets/trofeu.png'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onClick: () => void
  time: number
}

import '../styles/modal.scss'
import { Button } from '../ui/Button'

const Modal = ({ isOpen, onClose, time, onClick }: ModalProps) => {
  if (!isOpen) return null;

  const handleClick = () => {
    onClick()
    onClose()
  }
  return (
    <div className='modal-overlay' onClick={handleClick}>
      <div className='modal-content'>
        <div className="circle">
          <img src={trofeu} alt="trofeu" width={200} />
        </div>
        <h1>Agradecemos sua participação!</h1>
        <p>Respostas enviadas com sucesso</p>

        <h2>
          <Clock width={18} />
          {time} segundos de prova
        </h2>

        <Button onClick={handleClick} text="Valeu!" className='button' />

      </div>
    </div>
  )
}

export default Modal