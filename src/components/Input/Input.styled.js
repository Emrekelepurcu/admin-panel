import styled, { css } from 'styled-components'
import { SIZE } from './constants'

export const InputContainer = styled.div`
  position: relative;
`

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

export const InputElement = styled.input`
  width: 100%;
  padding: 12px;
  color: var(--color-disabled);
  font-size: var(--font-size-sm);
  border: 1px solid;
  border-color: var(--color-light-grey);
  border-radius: var(--border-radius-small);
  user-select: none;

  &:focus {
    border-color: var(--color-secondary);
  }

  &:disabled {
    background-color: var(--color-canvas);
  }

  ${({ $error }) => {
    if ($error) {
      return css`
        border-color: var(--color-danger);
      `
    }
  }}

  ${({ $isIcon }) => {
    if ($isIcon) {
      return css`
        padding-left: 35px;
      `
    }
  }}

  ${(props) => getSizeStyle(props.size)}
`

export const InputLabel = styled.label`
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 12px;
`

const getSizeStyle = (size) => {
  switch (size) {
    case SIZE.small:
      return css`
        height: 25px;
        max-width: 100px;
      `
    case SIZE.large:
      return css`
        height: 60px;
        max-width: 400px;
      `
    default:
      return css`
        height: 41px;
        width: 100%;
        max-width: 100%;
      `
  }
}
