import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Box mt={4}>
				<Container>Hello World</Container>
			</Box>
		</>
	)
}

export default Home
