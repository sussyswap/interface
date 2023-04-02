import { SupportedChainId } from 'constants/chains'

const BLOCK_EXPLORER_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.AVALANCHE]: 'https://snowtrace.io',
  [SupportedChainId.AVALANCHE_FUJI]: 'https://testnet.snowtrace.io', 
}

export enum ExplorerDataType {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
}

/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */
export function getExplorerLink(chainId: number, data: string, type: ExplorerDataType): string {
  if (chainId === SupportedChainId.AVALANCHE) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://snowtrace.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://snowtrace.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://snowtrace.io/block/${data}`
      default:
        return `https://snowtrace.io/`
    }
  }

  if (chainId === SupportedChainId.AVALANCHE_FUJI) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://testnet.snowtrace.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://testnet.snowtrace.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://testnet.snowtrace.io/block/${data}`
      default:
        return `https://testnet.snowtrace.io/`
    }
  }

  const prefix = BLOCK_EXPLORER_PREFIXES[chainId] ?? 'https://etherscan.io'

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return `${prefix}/tx/${data}`

    case ExplorerDataType.TOKEN:
      return `${prefix}/token/${data}`

    case ExplorerDataType.BLOCK:
      return `${prefix}/block/${data}`

    case ExplorerDataType.ADDRESS:
      return `${prefix}/address/${data}`
    default:
      return `${prefix}`
  }
}
