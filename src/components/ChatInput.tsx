// src/components/chat/ChatInput.tsx
// Компонент содержащий в себе трекстовое поле для ввода запроса пользователем и кнопку отправки запроса
// A reusable component that renders the text input field and send button for the user prompt
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ChatInput.module.scss'
interface ChatInputProps {
  input: string
  setInput: (val: string) => void
  onSend: () => void
  placeholder?: string
}

const ChatInput: React.FC<ChatInputProps> = ({
  input, //input: Current text value entered by the user.
  setInput, //setInput: Function to update the input state.
  onSend, //onSend: Function to trigger when the send button is clicked.
  placeholder // placeholder: Optional placeholder text for the textarea.
}) => {
  const { t } = useTranslation()
  return (
   <div className="chat-input">
  <textarea
    className="chat-input__textarea"
    placeholder={placeholder}
    value={input}
    onChange={e => setInput(e.target.value)}
  />
  <button className="chat-input__send" onClick={onSend}>
    {t('send')}
  </button>
</div>

  )
}

export default ChatInput
