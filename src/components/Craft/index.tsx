import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { PropsWithChildren } from 'react'

export const client = new ApolloClient({
	uri: process.env.CMS_URL,
	cache: new InMemoryCache()
})

export const CraftProvider = ({ children }: PropsWithChildren) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
