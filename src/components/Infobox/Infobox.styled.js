import styled, { css } from 'styled-components'
import { TYPE } from './constants'

export const InfoboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid;
  border-radius: var(--border-radius-small);
  transition: opacity 250ms linear 1s;

  ${(props) => getTypeStyle(props.type)}

  ${({ $isVisible }) => {
    if (!$isVisible) {
      return css`
        opacity: 0;
      `
    }
  }}
`

export const InfoboxTextContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InfoboxText = styled.div`
  font-size: var(--font-size-sm);
  margin-left: 10px;
`

export const InfoboxClose = styled.div`
  cursor: pointer;
`

const getTypeStyle = (type) => {
  switch (type) {
    case TYPE.success:
      return css`
        border-color: var(--color-secondary);
        background-color: var(--color-success);
        color: var(--color-primary);
      `
    case TYPE.failed:
      return css`
        background-color: var(--color-danger);
        border-color: var(--color-secondary);
        color: var(--color-primary);
      `
    default:
      return css`
        border-color: var(--color-secondary);
        background-color: var(--color-light-blue);
        color: var(--color-primary);
      `
  }
}
