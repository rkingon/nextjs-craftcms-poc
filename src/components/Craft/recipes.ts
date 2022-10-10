import { gql } from '@apollo/client'
import { client } from '.'

export interface Recipe {
	id: string
	title: string
	slug: string
	recipeTotalTime: string
	recipeServings: string
	recipeIngredients: {
		id: string
		ingredient: string
	}[]
	recipeDirections: {
		id: string
		direction: string
	}[]
}

export interface RecipesResponse {
	entries: Recipe[]
}

const RECIPE_QUERY = gql`
	query Recipes($slug: [String]) {
		entries(section: "recipes", slug: $slug) {
			id
			title
			slug
			... on recipes_recipes_Entry {
				id
				recipeTotalTime
				recipeServings
				recipeIngredients {
					... on recipeIngredients_ingredient_BlockType {
						id
						ingredient
					}
				}
				recipeDirections {
					... on recipeDirections_direction_BlockType {
						id
						direction
					}
				}
			}
		}
	}
`

export const fetchRecipes = async ({ slug }: { slug?: string } = {}) => {
	const { data } = await client.query<RecipesResponse>({
		query: RECIPE_QUERY,
		variables: {
			slug
		}
	})
	return data.entries
}
