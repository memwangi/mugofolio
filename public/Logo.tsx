import React from "react";
import { Box, Img } from "@chakra-ui/react";
import Image from "next/image";
import vectormugo from "./Vectormugo.svg";

export default function Logo(props: any) {
	return (
		<Box p={0} {...props}>
			<Image width="84" src={vectormugo} alt="tuko" />
		</Box>
	);
}
