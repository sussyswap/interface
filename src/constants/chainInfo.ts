import bnbCircleLogoUrl from 'assets/images/bnbCircle.svg'
import celoCircleLogoUrl from 'assets/images/celoCircle.png'
import ethereumLogoUrl from 'assets/images/ethereum-logo.png'
import polygonCircleLogoUrl from 'assets/images/polygonCircle.png'
import { default as arbitrumCircleLogoUrl, default as arbitrumLogoUrl } from 'assets/svg/arbitrum_logo.svg'
import bnbSquareLogoUrl from 'assets/svg/bnb_square_logo.svg'
import bnbLogo from 'assets/svg/bnb-logo.svg'
import celoLogo from 'assets/svg/celo_logo.svg'
import celoSquareLogoUrl from 'assets/svg/celo_square_logo.svg'
import optimismSquareLogoUrl from 'assets/svg/optimism_square_logo.svg'
import optimismLogoUrl from 'assets/svg/optimistic_ethereum.svg'
import polygonSquareLogoUrl from 'assets/svg/polygon_square_logo.svg'
import polygonMaticLogo from 'assets/svg/polygon-matic-logo.svg'
import { SupportedChainId } from 'constants/chains'
import ms from 'ms.macro'
import { darkTheme } from 'theme/colors'

import { SupportedL1ChainId, SupportedL2ChainId } from './chains'
import { } from './lists'

export const AVERAGE_L1_BLOCK_TIME = ms`12s`

export enum NetworkType {
  L1,
  L2,
}
interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly infoLink: string
  readonly logoUrl: string
  readonly circleLogoUrl?: string
  readonly squareLogoUrl?: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
  readonly color?: string
  readonly backgroundColor?: string
}

interface L1ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
  readonly defaultListUrl?: string
}

export interface L2ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L2
  readonly bridge: string
  readonly statusPage?: string
  readonly defaultListUrl: string
}

type ChainInfoMap = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} & { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.AVALANCHE]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.avax.network/learn/platform-overview',
    explorer: 'https://snowtrace.io/',
    infoLink: 'https://info.uniswap.org/#/avalanche',
    label: 'Avalanche',
    logoUrl: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    color: darkTheme.chain_4,
    defaultListUrl: 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche.tokenlist.json',
  },
  [SupportedChainId.AVALANCHE_FUJI]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.avax.network/',
    explorer: 'https://snowtrace.io/',
    infoLink: 'https://info.uniswap.org/#/avalanche',
    label: 'Avalanche Fuji',
    logoUrl: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    color: darkTheme.chain_4,
    defaultListUrl: 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche.tokenlist.json',
  },
  
}

export function getChainInfo(chainId: SupportedL1ChainId): L1ChainInfo
export function getChainInfo(chainId: SupportedL2ChainId): L2ChainInfo
export function getChainInfo(chainId: SupportedChainId): L1ChainInfo | L2ChainInfo
export function getChainInfo(
  chainId: SupportedChainId | SupportedL1ChainId | SupportedL2ChainId | number | undefined
): L1ChainInfo | L2ChainInfo | undefined

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1ChainInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
export function getChainInfo(chainId: any): any {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined
  }
  return undefined
}

const MAINNET_INFO = CHAIN_INFO[SupportedChainId.AVALANCHE]
export function getChainInfoOrDefault(chainId: number | undefined) {
  return getChainInfo(chainId) ?? MAINNET_INFO
}
