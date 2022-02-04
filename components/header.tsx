import {
	SimpleGrid,
	VStack,
	HStack,
	Stack,
	Box,
	Container,
	WrapItem,
} from "@chakra-ui/layout";
import { Text, Heading, Button } from "@chakra-ui/react";
import joseph from "../public/portjo.png";
import Image from "next/image";
import NavBar from "./nav";
import { useBreakpointValue } from '@chakra-ui/react'

export const Header = () => {
	const hidden = useBreakpointValue({default:"false", other: "true"})
	return (
		<VStack
			bg="#5cdb95"
			width={["full", "full", "full"]}
			px={[8, 20, 20]}
		>
			<NavBar />
			<HStack>
				<VStack
					px={[8, 20, 20]}
					py={[4, 20, 20]}
					alignSelf="flex-start"
					width={["full","100%"]}
					height="maxContent"
					alignItems="self-start"
					spacing={6}
				>
					<Text
						color="gray.50"
						fontWeight="semibold"
						fontSize={["3xl", "5xl", "5xl"]}
						textShadow='1px 1px #fff'
					>
						Hi<span color="#05386B">👋</span>, It&apos;s Joseph :)
					</Text>

					<Text fontSize={["md", "md", "md"]} color="gray.200">
						A multidisciplinary digital product designer and front end engineer. I
						thrive in breaking down complex problems into use cases and
						ultimately designing and building solutions that are a joy to own and use, for
						both mobile and web user interfaces.
					</Text>
					
				</VStack>

				<VStack width="30%" height="maxContent" alignItems="self-start" {...hidden}>
					<WrapItem
						overflow="hidden"
						lineHeight="0"
						borderRadius="full"
						_hover={{ boxShadow: "dark-xs" }}
					>
						<Image
							src={joseph}
							height={600}
							width={300}
							alt="Joseph Mugo"
							
						/>
					</WrapItem>
				</VStack>
			</HStack>
		</VStack>
	);
};

export default Header;
