import { Heading, Text, Image, Box, Link, color } from "@chakra-ui/react";
import React from "react";

export const serializers = {
	types: {
		mainImage: (props: {
			node: {
				alt: string | undefined;
				caption:
					| boolean
					| React.ReactChild
					| React.ReactFragment
					| React.ReactPortal
					| null
					| undefined;
			};
		}) => (
			<Box>
				<Image
					p={4}
					src="{urlFor(props.node.asset)}"
					alt={props.node.alt}
					width="600"
					style={{ borderRadius: "5px" }}
				/>
			</Box>
		),

		block(props: { node: { style: any }; children: {} }) {
			switch (props.node.style) {
				case "h1":
					return (
						<Heading
							as="h1"
							py={2}
							size="xl"
							color="black.600"
							fontWeight="bold"
						>
							{props.children}
						</Heading>
					);

				case "h2":
					return (
						<Heading as="h2" py={2} size="lg">
							{props.children}
						</Heading>
					);

				case "h3":
					return (
						<Heading as="h3" py={2} size="md">
							{props.children}
						</Heading>
					);

				case "h4":
					return (
						<Heading as="h4" py={2} size="md">
							{props.children}
						</Heading>
					);
				case "normal":
					return <Text fontSize={["md", "md", "md"]}>{props.children}</Text>;

				default:
					return <Text fontSize="xl">{props.children}</Text>;
			}
		},
	},
};


export default serializers;
