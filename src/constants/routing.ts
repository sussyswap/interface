// a list of tokens by chain
import { Currency, Token } from '@uniswap/sdk-core'
import { SupportedChainId } from 'constants/chains'

import {
  nativeOnChain,
  USDC,
  USDT,
  WRAPPED_NATIVE_CURRENCY,
} from './tokens'
import { USDC_FUJI } from '@sussyswap/smart-order-router'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.AVALANCHE_FUJI]: [USDC_FUJI],
  [SupportedChainId.AVALANCHE]: [USDC, USDT]
}
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  
}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {

}

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [SupportedChainId.AVALANCHE_FUJI]: [
    nativeOnChain(SupportedChainId.AVALANCHE_FUJI),
    USDC_FUJI
  ],
  [SupportedChainId.AVALANCHE]: [
    nativeOnChain(SupportedChainId.AVALANCHE),
    USDC,
    USDT
  ],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.AVALANCHE_FUJI]: [USDC_FUJI],
  [SupportedChainId.AVALANCHE]: [USDC, USDT]
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [SupportedChainId.AVALANCHE_FUJI]: [
    [USDC_FUJI, USDC_FUJI]
  ],
  [SupportedChainId.AVALANCHE]: [
    [USDC, USDT]
  ]
}
