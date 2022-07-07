import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function HeaderSocials() {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/kiet-nguyen-943564201/"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/KAN19" target="_blank">
				<FaGithub />
			</a>
			<a href="#">
				<CgWebsite />
			</a>
		</div>
	);
}

export default HeaderSocials;
