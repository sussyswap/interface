import { SupportedChainId } from 'constants/chains'

import {
  GOVERNANCE_ALPHA_V0_ADDRESSES,
  GOVERNANCE_ALPHA_V1_ADDRESSES,
  GOVERNANCE_BRAVO_ADDRESSES,
  TIMELOCK_ADDRESS,
  UNI_ADDRESS,
} from './addresses'

export const COMMON_CONTRACT_NAMES: Record<number, { [address: string]: string }> = {

}

// in PoS, ethereum block time is 12s, see https://ethereum.org/en/developers/docs/blocks/#block-time
export const DEFAULT_AVERAGE_BLOCK_TIME_IN_SECS = 12

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS: { [chainId: number]: number } = {
  1: DEFAULT_AVERAGE_BLOCK_TIME_IN_SECS,
}

export const LATEST_GOVERNOR_INDEX = 2
