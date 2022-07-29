import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { backendItems, frontendItems } from "./ExperienceItem";

function Experience() {
	return (
		<section id="experience">
			<h5>Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{frontendItems &&
							frontendItems.map((item) => (
								<article className="experience__details">
									<BsPatchCheckFill className="experience__details-icon" />
									<div>
										<h4>{item?.title}</h4>
										<small className="text-light">
											{item?.experience}
										</small>
									</div>
								</article>
							))}
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{backendItems &&
							backendItems.map((item) => (
								<article className="experience__details">
									<BsPatchCheckFill className="experience__details-icon" />
									<div>
										<h4>{item?.title}</h4>
										<small className="text-light">
											{item?.experience}
										</small>
									</div>
								</article>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
