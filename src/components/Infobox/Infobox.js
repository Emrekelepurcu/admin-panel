import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { InfoboxWrapper, InfoboxText, InfoboxClose, InfoboxTextContainer } from './Infobox.styled'
import { Info } from '@icons'

const Title = ({ type = 'default', isCompVisible = true, text = 'Başarılı', visibleTime = 2000 }) => {
  const [isVisible, setIsVisible] = useState(isCompVisible)

  useEffect(() => {
    if (!isCompVisible) {
      setIsVisible(false)
      return
    }
    const visibleTimeout = setTimeout(() => {
      setIsVisible(false)
    }, visibleTime)

    return () => clearTimeout(visibleTimeout)
  }, [isCompVisible])

  return (
    isVisible && (
      <InfoboxWrapper $isVisible={isVisible} type={type}>
        <InfoboxTextContainer>
          <Info />
          <InfoboxText>{text}</InfoboxText>
        </InfoboxTextContainer>
        <InfoboxClose onClick={() => setIsVisible(false)}>X</InfoboxClose>
      </InfoboxWrapper>
    )
  )
}

Title.propTypes = {
  text: PropTypes.string
}

export default Title
