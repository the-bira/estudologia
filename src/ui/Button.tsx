interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const Button = ({ text, onClick, className, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}> {text} </button>
  )
}