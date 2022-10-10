import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { PropsWithChildren } from 'react'

export const client = new ApolloClient({
	uri: 'https://nextjs-poc.craftcms.me/api',
	cache: new InMemoryCache()
})

export const CraftProvider = ({ children }: PropsWithChildren) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
