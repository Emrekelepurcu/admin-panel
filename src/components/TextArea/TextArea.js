import React from 'react'
import PropTypes from 'prop-types'
import { SIZE } from './constants'
import { TextAreaContainer, TextAreaElement, TextAreaLabel } from './TextArea.styled'

const TextArea = ({
  className = '',
  placeholder = '',
  label = '',
  size = 'default',
  error = false,
  disabled = false,
  ...props
}) => {
  return (
    <TextAreaContainer>
      {label && <TextAreaLabel>{label}</TextAreaLabel>}
      <TextAreaElement
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        $error={error}
        {...props}
      />
      {error && 'Hata'}
    </TextAreaContainer>
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([SIZE.default, SIZE.large, SIZE.small])])
}

export default TextArea
