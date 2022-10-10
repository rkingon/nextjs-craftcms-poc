import { Box, Container, Typography } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { fetchRecipes, Recipe } from 'src/components/Craft/recipes'

interface HomeProps {
	recipes: Recipe[]
}

const Home: NextPage<HomeProps> = ({ recipes }) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Box mt={4}>
				<Container>
					<Typography variant="h4" fontSize={20}>
						All Recipes
					</Typography>
					<Box component="ul">
						{recipes.map((recipe) => {
							return (
								<Box component="li" key={recipe.id}>
									<Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
								</Box>
							)
						})}
					</Box>
				</Container>
			</Box>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const recipes = await fetchRecipes()
	return {
		props: {
			recipes
		}
	}
}

export default Home
