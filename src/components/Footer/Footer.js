import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call Me</LinkTitle>
					<LinkItem href="tel:+94 77-520-3263">+94 77-520-3263</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email Me</LinkTitle>
					<LinkItem href="mailto:arachchigepramod@gmail.com">
						arachchigepramod@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						Willing to contribute and leading web and mobile projects
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/IT20121556">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/pramod-arachchige">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://twitter.com/DGMightyElf">
						<AiFillTwitterCircle size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
