import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello there!
				<br />
				I'm Pramod Arachchige..
			</SectionTitle>
			<SectionText>
				Undergraduate IT Student At Sri Lanka Institute of Information
				Technology And Helps To Build Real World Applications (Both Web &
				Mobile) With New Technologies Related To JAVA And JAVASCRIPT..
			</SectionText>
			<Button onClick={() => (window.location = "#about")}>
				More About Me
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
