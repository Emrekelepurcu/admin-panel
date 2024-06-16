import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function clickOutsideEvent(ref, func) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (func) func()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const ClickOutsideWrapper = (props) => {
  const wrapperRef = useRef(null)
  clickOutsideEvent(wrapperRef, props.func)

  return <div ref={wrapperRef}>{props.children}</div>
}

ClickOutsideWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  func: PropTypes.func.isRequired
}

export default ClickOutsideWrapper
