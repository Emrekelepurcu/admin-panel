import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, TitleContainer } from './Title.styled'
import { SIZE } from './constants'

const Title = ({ size = 'default', text }) => {
  return (
    <Wrapper>
      <TitleContainer size={size}>{text}</TitleContainer>
    </Wrapper>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([SIZE.default, SIZE.large, SIZE.small])])
}

export default Title
