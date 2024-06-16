import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  SelectContainer,
  SelectWrapper,
  SelectElement,
  SelectedElement,
  SelectboxLabel,
  SelectedDownArrow
} from './Selectbox.styled'
import { ClickOutsideWrapper } from '@hooks'

const Selectbox = ({
  options = [],
  isRemovable = true,
  disabled = false,
  defaultValue = null,
  isSelectActive,
  notFoundDataText = 'Data mevcut değil.',
  placeholder = 'Data seçiniz',
  removableText = 'Data Siliniz',
  label = '',
  onChange
}) => {
  const [isSelectWrapperActive, setIsSelectWrapperActive] = useState(isSelectActive)
  const [selectedData, setSelectedData] = useState(null)

  useEffect(() => {
    const defaultData = options.find((item) => item.value === defaultValue)
    if (defaultData) {
      setSelectedData((prev) => ({
        ...defaultData
      }))
    } else {
      setSelectedData(null)
    }
  }, [defaultValue])

  const showSelectWrapper = () => {
    if (disabled) return
    setIsSelectWrapperActive(!isSelectWrapperActive)
  }

  const selectedElementAction = (item) => {
    setSelectedData(item)
    onChange(item)
    setIsSelectWrapperActive(false)
  }

  const renderSelectElement = () => {
    return options?.map((item) => {
      return (
        <SelectElement
          key={item.value}
          onClick={() => selectedElementAction(item)}
          $isSelected={item?.value === selectedData?.value}
        >
          {item.name}
        </SelectElement>
      )
    })
  }

  return (
    <ClickOutsideWrapper
      func={() => {
        setIsSelectWrapperActive(false)
      }}
    >
      <SelectContainer>
        {label && <SelectboxLabel>{label}</SelectboxLabel>}
        <SelectedElement $isActive={isSelectWrapperActive} $disabled={disabled} onClick={showSelectWrapper}>
          {selectedData?.name || placeholder}
          <SelectedDownArrow $isActive={isSelectWrapperActive} />
        </SelectedElement>
        {isSelectWrapperActive && (
          <SelectWrapper>
            {isRemovable && <SelectElement onClick={() => selectedElementAction(null)}>{removableText}</SelectElement>}
            {options.length ? renderSelectElement() : notFoundDataText}
          </SelectWrapper>
        )}
      </SelectContainer>
    </ClickOutsideWrapper>
  )
}

const optionsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  })
)

Selectbox.propTypes = {
  options: optionsPropType,
  isRemovable: PropTypes.bool,
  isSelectActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  notFoundDataText: PropTypes.string
}

export default Selectbox
