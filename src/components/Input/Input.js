import React from 'react'
import PropTypes from 'prop-types'
import { INPUT_TYPE, SIZE } from './constants'
import { InputContainer, InputElement, InputLabel, InputIcon } from './Input.styled'
import { AppManager } from '@icons'

const Input = ({
  inputType = 'text',
  className = '',
  placeholder = '',
  label = '',
  size = 'default',
  error = false,
  disabled = false,
  IconComponent = null,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputElement
        className={className}
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        $error={error}
        $isIcon={IconComponent}
        {...props}
      />
      {IconComponent && (
        <InputIcon>
          <IconComponent />
        </InputIcon>
      )}
      {error && 'Hata'}
    </InputContainer>
  )
}

Input.propTypes = {
  inputType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([INPUT_TYPE.email, INPUT_TYPE.password, INPUT_TYPE.text, INPUT_TYPE.number])
  ]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([SIZE.default, SIZE.large, SIZE.small])])
}

export default Input
