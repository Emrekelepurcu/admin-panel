import styled, { css } from 'styled-components'

export const SwitchInputElement = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  visibility: hidden;
`

export const SwitchTextLabel = styled.label`
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 12px;
`

export const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  border-radius: var(--border-radius-circle);
  transition: 0.2s;
  background: var(--color-disabled);

  ${({ checked }) => {
    if (checked) {
      return css`
        left: calc(100% - 2px);
        transform: translateX(-100%);
        background: var(--color-secondary);
      `
    }
  }}
`

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-canvas);
  cursor: pointer;
  width: 48px;
  height: 24px;
  position: relative;
  transition: background-color 0.2s;
  border: 3px solid;
  border-radius: var(--border-radius-circle);
  border-color: var(--color-disabled);

  &:active {
    ${SwitchButton} {
      width: 20px;
    }
  }

  ${({ checked }) => {
    if (checked) {
      return css`
        border-color: var(--color-secondary);
      `
    }
  }}
`
