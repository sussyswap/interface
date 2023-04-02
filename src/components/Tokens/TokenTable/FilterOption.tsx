import styled from 'styled-components/macro'
const FilterOption = styled.button<{ active: boolean; highlight?: boolean }>`
  height: 100%;
  color: ${({ theme, active }) => (active ? 
    //@ts-ignore
    theme.accentActive : theme.textPrimary)};
  background-color: ${({ theme, active }) => (active ? 
    //@ts-ignore
    theme.accentActiveSoft : theme.backgroundInteractive)};
  margin: 0;
  padding: 6px 12px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  transition-duration: ${({ theme }) => 
    //@ts-ignore
    theme.transition.duration.fast};
  border: none;
  outline: ${({ theme, active, highlight }) => (active && highlight ? `1px solid ${
    //@ts-ignore
    theme.accentAction}` : 'none')};

  :hover {
    cursor: pointer;
    background-color: ${({ theme, active }) => (active ? 
    //@ts-ignore
    theme.accentActiveSoft : theme.backgroundModule)};
    opacity: ${({ theme, active }) => (active ? 
    //@ts-ignore
    theme.opacity.hover : 1)};
  }
  :focus {
    background-color: ${({ theme, active }) => (active ? 
    //@ts-ignore
    theme.accentActiveSoft : theme.backgroundInteractive)};
  }
`
export default FilterOption
