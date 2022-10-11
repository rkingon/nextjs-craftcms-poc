import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	hooks: {
		afterAllFileWrite: ['prettier --write']
	},
	schema: process.env.CMS_URL,
	documents: 'src/**/*.gql',
	generates: {
		'src/components/Craft/_generated.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				avoidOptionals: true,
				maybeValue: 'T | null | undefined'
			}
		}
	}
}

export default config
