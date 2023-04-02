import { Currency, Ether, NativeCurrency, Token, WETH9 } from '@uniswap/sdk-core'
import { SupportedChainId } from 'constants/chains'
import invariant from 'tiny-invariant'

import { UNI_ADDRESS } from './addresses'

export const NATIVE_CHAIN_ID = 'NATIVE'

// When decimals are not specified for an ERC20 token
// use default ERC20 token decimals as specified here:
// https://docs.openzeppelin.com/contracts/3.x/erc20
export const DEFAULT_ERC20_DECIMALS = 18



export const USDC_FUJI = new Token(
  SupportedChainId.AVALANCHE_FUJI,
  '0xB6076C93701D6a07266c31066B298AeC6dd65c2d',
  6,
  'USDC',
  'USD//C'
)



export const UNI: { [chainId: number]: Token } = {
  // [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap'),
  // [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap'),
}

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  ...(WETH9 as Record<SupportedChainId, Token>),
  [SupportedChainId.AVALANCHE]: new Token(
    SupportedChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [SupportedChainId.AVALANCHE_FUJI]: new Token(
    SupportedChainId.AVALANCHE_FUJI,
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
}




function isAvax(chainId: number): chainId is SupportedChainId.AVALANCHE_FUJI | SupportedChainId.AVALANCHE {
  return chainId === SupportedChainId.AVALANCHE_FUJI || chainId === SupportedChainId.AVALANCHE
}

class AvaxNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isAvax(this.chainId)) throw new Error('Not Avax')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isAvax(chainId)) throw new Error('Not Avax')
    super(chainId, 18, 'Avalanche', 'AVAX')
  }
}

class ExtendedEther extends Ether {
  public get wrapped(): Token {
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    if (wrapped) return wrapped
    throw new Error('Unsupported chain ID')
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {}
export function nativeOnChain(chainId: number): NativeCurrency | Token {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId]
  let nativeCurrency: NativeCurrency | Token
  if (isAvax(chainId)) {
    nativeCurrency = new AvaxNativeCurrency(chainId)
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId)
  }
  return (cachedNativeCurrency[chainId] = nativeCurrency)
}

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId in SupportedChainId]?: string } } = {
  USDC: {
    [SupportedChainId.AVALANCHE_FUJI]: USDC_FUJI.address,
  },
}
