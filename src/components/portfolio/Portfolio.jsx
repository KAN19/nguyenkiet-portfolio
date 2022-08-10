import React from "react";
import "./portfolio.css";

import { portfolioItems } from "./PortfolioItems";

function Portfolio() {
	// const ref = window.location.href;

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{portfolioItems.map((item) => (
					<article className="portfolio__item" key={item?.id}>
						<div className="portfolio__item-image">
							<img src={item.image} alt="project 1" />
						</div>
						<h3>{item?.title}</h3>

						<div className="portfolio__item-description">
							<div>
								<span className="description__title">
									Team size:
								</span>
								<span> {item?.team_size}</span>
							</div>
							<div>
								<span className="description__title">
									Technologies:
								</span>
								<span> {item?.tech_stack}</span>
							</div>
						</div>

						<div className="portfolio__item-cta">
							{item?.github && (
								<a
									href={item?.github}
									target="_blank"
									className="btn"
									rel="noreferrer"
								>
									Github
								</a>
							)}

							{/* {item?.live_demo && (
								// eslint-disable-next-line jsx-a11y/anchor-is-valid
								<a
									ref={item?.live_demo}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Live Demo
								</a>
							)} */}

							{item?.live_demo ? (
								// eslint-disable-next-line jsx-a11y/anchor-is-valid

								<a
									href={item?.live_demo}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Live Demo
								</a>
							) : (
								""
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
