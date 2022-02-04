import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, Stack } from "@chakra-ui/react";

import theme from "../components/theme";
import "../components/theme/styles.css";
import WithSubnavigation from "../components/nav2";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Stack minW={"100vw"} >
				<Head>
					<title>mugofolio</title>
					<meta name="Mugo" content="Designer Who Codes :)" />
					<link rel="icon" href="/Vectormugo.svg" />
				</Head>
				<WithSubnavigation/>
				<Component {...pageProps} />
			</Stack>
		</ChakraProvider>
	);
}