
export const JOE_LIST = 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/mc.tokenlist.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [JOE_LIST]
export const DEFAULT_INACTIVE_LIST_URLS: string[] = [
  JOE_LIST,
  ...UNSUPPORTED_LIST_URLS,
]

export const DEFAULT_LIST_OF_LISTS: string[] = [...DEFAULT_ACTIVE_LIST_URLS, ...DEFAULT_INACTIVE_LIST_URLS]
