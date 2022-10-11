import { Box, Container, Divider, Stack, Typography, Link } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { fetchRecipes, Recipe } from 'src/components/Craft/recipes'

interface RecipePageProps {
	recipe: Recipe
}

const RecipePage: NextPage<RecipePageProps> = ({ recipe }) => {
	return (
		<>
			<Head>
				<title>{recipe.title}</title>
			</Head>
			<Box mt={4}>
				<Container>
					<Stack spacing={4}>
						<Link component={NextLink} href="/">
							Back
						</Link>
						<Stack spacing={2}>
							<Typography variant="h1" fontSize={32}>
								{recipe.title}
							</Typography>
							<Stack
								direction="row"
								spacing={2}
								divider={<Divider orientation="vertical" flexItem />}
							>
								<Typography>Total Time: {recipe.recipeTotalTime}</Typography>
								<Typography>Serving: {recipe.recipeServings}</Typography>
							</Stack>
						</Stack>
						<Stack spacing={2}>
							<Typography variant="h2" fontSize={24}>
								Ingredients
							</Typography>
							<Box component="ul">
								{recipe.recipeIngredients?.map((entry) => {
									if (!entry) {
										return null
									}
									return (
										<Box
											component="li"
											key={entry.id}
											dangerouslySetInnerHTML={{ __html: entry.ingredient! }}
										/>
									)
								})}
							</Box>
						</Stack>
						<Stack spacing={2}>
							<Typography variant="h2" fontSize={24}>
								Directions
							</Typography>
							<Box component="ol">
								{recipe.recipeDirections?.map((entry) => {
									if (!entry) {
										return null
									}
									return (
										<Box
											component="li"
											key={entry.id}
											dangerouslySetInnerHTML={{ __html: entry.direction! }}
										/>
									)
								})}
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<RecipePageProps, { slug: string }> = async ({
	params
}) => {
	const recipes = await fetchRecipes({
		slug: params?.slug
	})
	const recipe = recipes?.[0]
	if (recipe) {
		return {
			props: {
				recipe
			}
		}
	}
	return {
		notFound: true
	}
}

export default RecipePage
