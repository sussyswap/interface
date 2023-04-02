import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { ExternalLink, ThemedText } from 'theme'

const StyledLink = styled(ExternalLink)`
  font-weight: 600;
  color: ${({ theme }) => 
    //@ts-ignore
    theme.textSecondary};
`

const LastUpdatedText = styled.span`
  color: ${({ theme }) =>
    //@ts-ignore
    theme.textTertiary};
`

const LAST_UPDATED_DATE = '11.17.22'

export default function PrivacyPolicyNotice() {
  return (
    <ThemedText.Caption color="textSecondary">
      <Trans>By connecting a wallet, you agree to Sussyswap Labs&apos;</Trans>{' '}
      <StyledLink href="https://sussyswap.org/terms-of-service/">
        <Trans>Terms of Service</Trans>{' '}
      </StyledLink>
      <Trans>and consent to its</Trans>{' '}
      <StyledLink href="https://sussyswap.org/privacy-policy">
        <Trans>Privacy Policy.</Trans>
      </StyledLink>
      <LastUpdatedText>
        {' ('}
        <Trans>Last Updated</Trans>
        {` ${LAST_UPDATED_DATE})`}
      </LastUpdatedText>
    </ThemedText.Caption>
  )
}
