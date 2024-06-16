import styled, { css } from 'styled-components'
import { SIZE, TYPE } from './constants'

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: var(--border-radius-small);

  &:disabled {
    cursor: not-allowed;
    user-select: none;
  }

  ${(props) => getTypeStyle(props.type)}
  ${(props) => getSizeStyle(props.size)}
  ${(props) => getLoadingStyle(props.$isLoading || false)}
`

const getTypeStyle = (type) => {
  switch (type) {
    case TYPE.primary:
      return css`
        color: var(--color-white);
        background-color: var(--color-secondary);

        &:hover {
          background-color: var(--color-dark-secondary);
        }

        &:active {
          background-color: var(--color-darker-secondary);
        }
      `
    case TYPE.secondary:
      return css`
        color: var(--color-secondary);
        background-color: var(--color-grey);
      `
    default:
      return css`
        color: var(--color-primary);
        background-color: var(--color-white);

        &:hover {
          background-color: var(--color-canvas);
        }

        &:active {
          background-color: var(--color-dark-grey);
        }
      `
  }
}

const getSizeStyle = (size) => {
  switch (size) {
    case SIZE.small:
      return css`
        font-size: var(--font-size-sm);
        height: 48px;
        min-width: 150px;
      `
    case SIZE.large:
      return css`
        font-size: var(--font-size-lg);
        height: 60px;
        min-width: 200px;
      `
    default:
      return css`
        font-size: var(--font-size-md);
        height: 41px;
        min-width: 97px;
      `
  }
}

const getLoadingStyle = (isLoading) => {
  if (isLoading) {
    return css`
      background-color: red;
    `
  }
}
