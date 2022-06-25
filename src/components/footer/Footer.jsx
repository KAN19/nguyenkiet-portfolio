import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import "./footer.css";

function Footer() {
	return (
		<footer>
			<a href="#" className="footer__logo">
				NGUYEN KIET
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://facebook.com">
					<FaFacebookF />
				</a>
				<a href="https://instagram.com">
					<FaInstagram />
				</a>
				<a href="https://twitter.com">
					<FiTwitter />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; NguyenKiet. All rights reserved</small>
			</div>
		</footer>
	);
}

export default Footer;
