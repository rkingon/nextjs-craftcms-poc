import { client } from '..'
import { RecipesDocument, Recipes_Recipes_Entry } from '../_generated'

export type Recipe = Recipes_Recipes_Entry

export const fetchRecipes = async ({ slug }: { slug?: string } = {}) => {
	const { data } = await client.query({
		query: RecipesDocument,
		variables: {
			slug
		}
	})
	return data.entries as Recipe[]
}
