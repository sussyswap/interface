import { useCallback, useEffect } from 'react'
import { X } from 'react-feather'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring'
import styled, { useTheme } from 'styled-components/macro'

import { useRemovePopup } from '../../state/application/hooks'
import { PopupContent } from '../../state/application/reducer'
import FailedNetworkSwitchPopup from './FailedNetworkSwitchPopup'
import TransactionPopup from './TransactionPopup'

const StyledClose = styled(X)`
  position: absolute;
  right: 20px;
  top: 20px;

  :hover {
    cursor: pointer;
  }
`
const Popup = styled.div`
  display: inline-block;
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => 
    //@ts-ignore
    theme.backgroundSurface};
  position: relative;
  border-radius: 10px;
  padding: 20px;
  padding-right: 35px;
  overflow: hidden;

  ${({ theme }) => 
  //@ts-ignore
  theme.deprecated_mediaWidth.deprecated_upToSmall`
    min-width: 290px;
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  `}
`
const Fader = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => 
  //@ts-ignore
  theme.deprecated_bg3};
`

const AnimatedFader = animated(Fader)

export default function PopupItem({
  removeAfterMs,
  content,
  popKey,
}: {
  removeAfterMs: number | null
  content: PopupContent
  popKey: string
}) {
  const removePopup = useRemovePopup()
  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])
  useEffect(() => {
    if (removeAfterMs === null) return undefined

    const timeout = setTimeout(() => {
      removeThisPopup()
    }, removeAfterMs)

    return () => {
      clearTimeout(timeout)
    }
  }, [removeAfterMs, removeThisPopup])

  const theme = useTheme()
  const faderStyle = useSpring({
    from: { width: '100%' },
    to: { width: '0%' },
    config: { duration: removeAfterMs ?? undefined },
  })

  let popupContent
  if ('txn' in content) {
    popupContent = <TransactionPopup hash={content.txn.hash} />
  } else if ('failedSwitchNetwork' in content) {
    popupContent = <FailedNetworkSwitchPopup chainId={content.failedSwitchNetwork} />
  }

  return popupContent ? (
    <Popup>
      <StyledClose color={
  //@ts-ignore
  theme.textSecondary} onClick={removeThisPopup} />
      {popupContent}
      {removeAfterMs !== null ? <AnimatedFader style={faderStyle} /> : null}
    </Popup>
  ) : null
}
