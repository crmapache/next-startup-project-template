import { useState } from 'react'

import { Placeholder, StyledInput, ErrorContainer, InputContainer } from './Input.elements'
import { InputProps } from './Input.types'

export const Input = ({ value, onChange, placeholder, error, type = 'text' }: InputProps) => {
  const [focused, setFocused] = useState(false)

  const handleChange = (newValue: string) => {
    onChange(newValue)
  }

  return (
    <InputContainer $focused={focused} $hasValue={!!value} $error={!!error}>
      <StyledInput
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
      />
      <Placeholder>{placeholder}</Placeholder>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </InputContainer>
  )
}
