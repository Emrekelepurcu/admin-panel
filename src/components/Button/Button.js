import React from 'react'
import PropTypes from 'prop-types'
import { SIZE, TYPE } from './constants'
import { ButtonElement } from './Button.styled'

const Button = ({ children, size = 'default', type = '', className = '', isLoading = false, ...props }) => {
  return (
    <ButtonElement className={className} size={size} type={type} $isLoading={isLoading} {...props}>
      {isLoading ? 'Loading' : children}
    </ButtonElement>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([SIZE.default, SIZE.large, SIZE.small])]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([TYPE.default, TYPE.primary, TYPE.secondary])])
}

export default Button
