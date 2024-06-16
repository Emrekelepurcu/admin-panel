import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SIZE, TYPE } from './constants'
import { SwitchInputElement, SwitchLabel, SwitchTextLabel, SwitchButton } from './Switch.styled'

const Switch = ({ isChecked, handleToggle, id, label }) => {
  return (
    <>
      {label && <SwitchTextLabel>{label}</SwitchTextLabel>}
      <SwitchInputElement checked={isChecked} onChange={handleToggle} id={`switch-${id}`} />
      <SwitchLabel checked={isChecked} htmlFor={`switch-${id}`}>
        <SwitchButton checked={isChecked} />
      </SwitchLabel>
    </>
  )
}

Switch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default Switch
