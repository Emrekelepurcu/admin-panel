import styled, { css } from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const ProfileInfo = styled.div``
export const ProfileName = styled.div`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
`
export const ProfileEmail = styled.div`
  font-size: var(--font-size-small);
  color: var(--color-blue-500);
`

export const ProfileAbb = styled.div`
  padding: 11px 8px;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius-circle);
`
