import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "assets/me.png";
import HeaderSocials from "./HeaderSocials";
import NguyenKiet2 from "assets/nguyenkiet2.png";

function Header() {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Kiet Nguyen</h1>
				<h5 className="text-light">Web Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={NguyenKiet2} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
