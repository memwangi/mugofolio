import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} maxWidth={"100vw"} maxW={"lg"}>
					<Heading fontWeight={"bold"} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: useBreakpointValue({ base: "20%", md: "30%" }),
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "blue.400",
								zIndex: -1,
							}}
						>
							Hi<span color="#05386B">👋</span>, It's Joseph.
						</Text>
						<br />
						<Text color={"blue.400"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} fontWeight={"semibold"} as={"span"}>
							I design digital products for startups.
						</Text>
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
						I have 3 years of hands-on experience in working with teams to deliver software
						solutions for B2B SaaS startups - From ideation to designing and
						developing usable products.
                        
                        Outside work, I like to do 
						squats, read great books, and share random thoughts on my newsletter.
					</Text>
					<Stack direction={{ base: "column", md: "row" }} spacing={4}>
						<Button
                        
							rounded={"md"}
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}
						>
							Get In Touch
						</Button>
						<Button rounded={"md"}>Recent Projects</Button>
					</Stack>
				</Stack>
			</Flex>

			<Flex flex={1}>
				<Image
					width={{ base: "full", md: "md" }}
					height={{ base: "full", md: "md" }}
					alt={"Login Image"}
					objectFit={"cover"}
					src={
						"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					}
				/>
			</Flex>
		</Stack>
	);
}
