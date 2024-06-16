import styled, { css } from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
`

export const SelectboxLabel = styled.label`
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 12px;
`

export const SelectedElement = styled.div`
  background-color: var(--color-dark-grey);
  padding: 12px;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  border: 1px solid;
  border-color: var(--color-dark-grey);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  user-select: none;

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        border-radius: var(--border-radius-small) var(--border-radius-small) 0 0;
        border-color: var(--color-secondary);
      `
    }
  }}

  ${({ $disabled }) => {
    if ($disabled) {
      return css`
        cursor: not-allowed;
      `
    }
  }}
`

export const SelectWrapper = styled.div`
  height: 175px;
  overflow: auto;
  position: absolute;
  z-index: 9;
  background-color: var(--color-white);
  width: 99.6%;
  border: 1px solid;
  border-width: 0 1px 1px 1px;
  border-color: var(--color-secondary);
  border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
`

export const SelectElement = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  cursor: pointer;
  padding: 11px;

  &:hover {
    background-color: var(--color-dark-grey);
  }

  ${({ $isSelected }) => {
    if ($isSelected) {
      return css`
        background-color: var(--color-dark-grey);
      `
    }
  }}
`

export const SelectedDownArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
  right: 10px;
  bottom: 19px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        transform: rotate(225deg);
        -webkit-transform: rotate(225deg);
      `
    }
  }}
`
