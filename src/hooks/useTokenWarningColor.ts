import { WARNING_LEVEL } from 'constants/tokenSafety'
import { useTheme } from 'styled-components/macro'

export const useTokenWarningTextColor = (level: WARNING_LEVEL) => {
  const theme = useTheme()

  switch (level) {
    case WARNING_LEVEL.MEDIUM:
      //@ts-ignore
      return theme.accentWarning
    case WARNING_LEVEL.UNKNOWN:
      //@ts-ignore
      return theme.accentFailure
    case WARNING_LEVEL.BLOCKED:
      //@ts-ignore
      return theme.textSecondary
  }
}

export const useTokenWarningColor = (level: WARNING_LEVEL) => {
  const theme = useTheme()

  switch (level) {
    case WARNING_LEVEL.MEDIUM:
      //@ts-ignore
      return theme.accentWarningSoft
    case WARNING_LEVEL.UNKNOWN:
      //@ts-ignore
      return theme.accentFailureSoft
    case WARNING_LEVEL.BLOCKED:
      //@ts-ignore
      return theme.backgroundFloating
  }
}
