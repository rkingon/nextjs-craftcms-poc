import { Box, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import type { AppProps } from 'next/app'
import { CraftProvider } from 'src/components/Craft'

/* customize mui here */
const theme = createTheme({})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CraftProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box display="flex" flexDirection="column" minHeight="100vh">
					<Box flex={1}>
						<Box component="header" boxShadow={2} py={2}>
							<Container>
								<Typography
									component="div"
									variant="h1"
									textAlign="center"
									fontSize={32}
								>
									Recipe App
								</Typography>
							</Container>
						</Box>
						<Box component="main">
							<Component {...pageProps} />
						</Box>
					</Box>
					<Box component="footer" borderTop={1} py={2}>
						<Container>
							<Typography textAlign="center">
								&copy; {new Date().getFullYear()} Recipe App
							</Typography>
						</Container>
					</Box>
				</Box>
			</ThemeProvider>
		</CraftProvider>
	)
}

export default MyApp
