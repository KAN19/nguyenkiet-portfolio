/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
	const [name, setName] = useState("");

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<BsLinkedin className="contact__option-icon" />
						<h4>Linkedin</h4>
						<h5>Kiet Nguyen</h5>
						<a
							href="https://www.linkedin.com/in/kiet-nguyen-943564201/"
							target="_blank"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Nguyen Kiet</h5>
						<a href="https://m.me/nguyenkiet87" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>nguyenkiet0807@gmail</h5>
						<a
							href="mailto:nguyenkiet0807@gmail.com"
							target="_blank"
						>
							Send a message
						</a>
					</article>
				</div>
				{/* End contact option */}
				<form action="">
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows={7}
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
