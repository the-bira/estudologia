interface TextAreaProps {
  label?: string;
  maxLength?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

import { useState } from 'react';
import '../styles/textarea.scss'

const TextArea = ({
  label,
  maxLength,
  value,
  onChange
}: TextAreaProps) => {

  const [valueLength, setValueLength] = useState(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && event.target.value.length > maxLength) {
      return
    } else {
      setValueLength(event.target.value.length)
    }

    if (onChange) {
      onChange(event)
    }
  }
  return (
    <div className="textarea-container">
      <div className="info">
        {label && <span> {label}</span>}
        {maxLength && <span> {valueLength}/{maxLength}</span>}
      </div>
      <textarea
        maxLength={maxLength}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default TextArea;