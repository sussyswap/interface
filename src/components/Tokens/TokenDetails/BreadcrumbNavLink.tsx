import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const BreadcrumbNavLink = styled(Link)`
  display: flex;
  color: ${({ theme }) => 
  //@ts-ignore
  theme.textSecondary};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  margin-bottom: 16px;
  transition-duration: ${({ theme }) => 
  //@ts-ignore
  theme.transition.duration.fast};
  width: fit-content;

  &:hover {
    color: ${({ theme }) => 
  //@ts-ignore
  theme.textTertiary};
  }
`
