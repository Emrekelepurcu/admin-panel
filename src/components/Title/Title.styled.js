import styled, { css } from 'styled-components'
import { SIZE } from './constants'

export const Wrapper = styled.section`
  display: flex;
  max-width: max-content;
  min-width: min-content;
`

export const TitleContainer = styled.div`
  font-weight: var(--font-weight-bold);
  ${(props) => getSizeStyle(props.size)}
`

const getSizeStyle = (size) => {
  switch (size) {
    case SIZE.large:
      return css`
        font-size: var(--font-size-lg);
      `
    case SIZE.small:
      return css`
        font-size: var(--font-size-sm);
      `
    default:
      return css`
        font-size: var(--font-size-md);
      `
  }
}
