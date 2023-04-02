import Column from 'components/Column'
import Row from 'components/Row'
import { DropDownOption } from 'nft/types'
import { Check } from 'react-feather'
import styled, { useTheme } from 'styled-components/macro'
import { ThemedText } from 'theme'

const DropdownWrapper = styled(Column)<{ $width: number }>`
  gap: 4px;
  background: ${({ theme }) => //@ts-ignore
  theme.backgroundSurface};
  padding: 8px;
  width: ${({ $width }) => $width}px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => //@ts-ignore
  theme.deepShadow};
  border: 1px solid ${({ theme }) => //@ts-ignore
  theme.backgroundOutline};
`

const DropdownRow = styled(Row)`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({ theme }) =>//@ts-ignore
    theme.backgroundInteractive};
  }
`

interface DropdownArgs {
  dropDownOptions: DropDownOption[]
  width: number
}

export const Dropdown = ({ dropDownOptions, width }: DropdownArgs) => {
  const theme = useTheme()
  return (
    <DropdownWrapper $width={width}>
      {dropDownOptions.map((option) => (
        <DropdownRow key={option.displayText} onClick={option.onClick}>
          <ThemedText.BodyPrimary lineHeight="24px">{option.displayText}</ThemedText.BodyPrimary>
          {option.isSelected && <Check height={20} width={20} color={//@ts-ignore
      theme.accentAction} />}
        </DropdownRow>
      ))}
    </DropdownWrapper>
  )
}
