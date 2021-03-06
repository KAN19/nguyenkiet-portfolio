import React from "react";
import "./about.css";
import ME from "assets/me-about.jpg";
import NguyenKiet from "assets/nguyenkiet.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";

function About() {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={NguyenKiet} alt="me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>6 &lt; Months Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>2 Clients</small>
						</article>
						<article className="about__card">
							<VscFolder className="about__icon" />
							<h5>Projects</h5>
							<small>4+ Projects Done</small>
						</article>
					</div>

					<p>
						My name is Nguyen Anh Kiet, and I am a software engineer
						specialising in front-end development. I enjoy creating
						precise and beautiful things as well as studying new
						technologies.
						<div>
							I'm currently learning Java and Spring Framework 🍃
						</div>
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
