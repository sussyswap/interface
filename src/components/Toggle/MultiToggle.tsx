import styled from 'styled-components/macro'

export const ToggleWrapper = styled.button<{ width?: string }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  padding: 1px;
  background: ${({ theme }) => 
  //@ts-ignore
  theme.deprecated_bg1};
  border-radius: 8px;
  border: ${({ theme }) => '1px solid ' + 
  //@ts-ignore
  theme.backgroundInteractive};
  cursor: pointer;
  outline: none;
`

export const ToggleElement = styled.span<{ isActive?: boolean; fontSize?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({ theme, isActive }) => (isActive ? 
  //@ts-ignore
  theme.backgroundSurface : 'none')};
  color: ${({ theme, isActive }) => (isActive ? 
  //@ts-ignore
  theme.textPrimary : theme.textTertiary)};
  font-size: ${({ fontSize }) => fontSize ?? '1rem'};
  font-weight: 500;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({ theme, isActive }) => (isActive ? 
  //@ts-ignore
  theme.textSecondary : theme.textTertiary)};
  }
`
