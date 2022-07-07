import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
	return (
		<section id="experience">
			<h5>Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML/CSS</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>TailwindCss</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>ReactJs</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React Native</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>NextJs</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Spring</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Laravel</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL/Postgres</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Docker</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
