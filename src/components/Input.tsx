import { FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name?: string
}

const Input: FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name
}) => {
  return (
    <input
      className={styles.Input}
      type={type}
      value={value}
      onChange={onChange} 
      placeholder={placeholder}
      name={name}
    />
  )
}

export default Input
