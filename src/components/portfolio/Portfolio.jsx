import React from "react";
import "./portfolio.css";
import IMG1 from "assets/portfolio1.jpg";
import IMG2 from "assets/portfolio2.jpg";
import IMG3 from "assets/portfolio3.jpg";
import IMG4 from "assets/portfolio4.jpg";
import IMG5 from "assets/portfolio5.png";
import IMG6 from "assets/portfolio6.jpg";
import { portfolioItems } from "./PortfolioItems";

function Portfolio() {
	const ref = window.location.href;

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
									Tech stack:
								</span>
								<span> {item?.tech_stack}</span>
							</div>
						</div>

						<div className="portfolio__item-cta">
							<a
								href={item?.github}
								target="_blank"
								className="btn"
								rel="noreferrer"
							>
								Github
							</a>
							{!item?.live_demo && (
								<a
									href={ref}
									className="btn btn-primary"
									rel="noreferrer"
								>
									Live Demo
								</a>
							)}

							{item?.live_demo && (
								<a
									ref={item?.github}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Live Demo
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
