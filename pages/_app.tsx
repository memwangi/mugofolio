import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, VStack } from "@chakra-ui/react";

import theme from "../components/theme";
import "../components/theme/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<VStack>
				<Head>
					<title>mugofolio</title>
					<meta name="Mugo" content="Designer Who Codes :)" />
					<link rel="icon" href="/Vectormugo.svg" />
				</Head>
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	);
}