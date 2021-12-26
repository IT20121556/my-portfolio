import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 5, text: "University Projects" },
	{ number: 3, text: "Personal Real World Projects" },
	{
		number: 3,
		text: "Played role as leader for building projects",
	},
];

const Acomplishments = () => (
	<Section>
		<SectionDivider />
		<br />
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
