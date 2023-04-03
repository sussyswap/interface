import { SupportedChainId } from 'constants/chains'
import useHttpLocations from 'hooks/useHttpLocations'
import { useMemo } from 'react'
import { isAddress } from 'utils'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import AvalancheLogo from '../../assets/svg/avalanche-avax-logo.svg'
import { NATIVE_CHAIN_ID, nativeOnChain } from '../../constants/tokens'

type Network = 'avalanche'

export function chainIdToNetworkName(networkId: SupportedChainId): Network {
  switch (networkId) {
    case SupportedChainId.AVALANCHE_FUJI:
    case SupportedChainId.AVALANCHE:
      return 'avalanche'
    default:
      return 'avalanche'
  }
}

export function getNativeLogoURI(chainId: SupportedChainId = SupportedChainId.AVALANCHE): string {
  switch (chainId) {
    case SupportedChainId.AVALANCHE:
    case SupportedChainId.AVALANCHE_FUJI:
      return AvalancheLogo
    default:
      return EthereumLogo
  }
}

function getTokenLogoURI(address: string, chainId: SupportedChainId = SupportedChainId.AVALANCHE): string | void {
  const networkName = chainIdToNetworkName(chainId)
  const networksWithUrls = [
    356,
  ]
  // if (networksWithUrls.includes(chainId)) {
  //   return `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${networkName}/assets/${address}/logo.png`
  // }

}

export default function useCurrencyLogoURIs(
  currency:
    | {
        isNative?: boolean
        isToken?: boolean
        address?: string
        chainId: number
        logoURI?: string | null
      }
    | null
    | undefined
): string[] {
  const locations = useHttpLocations(currency?.logoURI)
  return useMemo(() => {
    const logoURIs = [...locations]
    if (currency) {
      if (currency.isNative || currency.address === NATIVE_CHAIN_ID) {
        logoURIs.push(getNativeLogoURI(currency.chainId))
      } else if (currency.isToken || currency.address) {
        const checksummedAddress = isAddress(currency.address)
        const logoURI = checksummedAddress && getTokenLogoURI(checksummedAddress, currency.chainId)
        if (logoURI) {
          logoURIs.push(logoURI)
        }
      }
    }
    return logoURIs
  }, [currency, locations])
}
