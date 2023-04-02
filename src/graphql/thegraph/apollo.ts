import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client'
import { SupportedChainId } from 'constants/chains'
import { supportedChainId } from 'utils/supportedChainId'

import store from '../../state/index'

const CHAIN_SUBGRAPH_URL: Record<number, string> = {
  [SupportedChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/sussyswap/sussyswap-avax-subgraph',
  [SupportedChainId.AVALANCHE_FUJI]: 'https://api.thegraph.com/subgraphs/name/sussyswap/sussyswap-fuji-subgraph'
}

const httpLink = new HttpLink({ uri: CHAIN_SUBGRAPH_URL[SupportedChainId.AVALANCHE] })

// This middleware will allow us to dynamically update the uri for the requests based off chainId
// For more information: https://www.apollographql.com/docs/react/networking/advanced-http-networking/
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const chainId = store.getState().application.chainId

  operation.setContext(() => ({
    uri:
      chainId && CHAIN_SUBGRAPH_URL[chainId]
        ? CHAIN_SUBGRAPH_URL[chainId]
        : CHAIN_SUBGRAPH_URL[SupportedChainId.AVALANCHE],
  }))

  return forward(operation)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
})
