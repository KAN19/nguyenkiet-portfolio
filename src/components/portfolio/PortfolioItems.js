import dongphuong from "assets/dongphuong.jpg";
import gosv from "assets/GoSv.jpg";
import movie from "assets/Movieweb.jpg";
import quan5 from "assets/quan5.jpg";
import IMG6 from "assets/portfolio6.jpg";

export const portfolioItems = [
	{
		id: 1,
		image: gosv,
		title: "Hitchhiking platform for VNU student",
		team_size: "3",
		tech_stack: "React Native, Tailwind Css, Redux, Google API, Expo",
		github: "https://github.com/SharkCompany/gos-mobile",
		live_demo: "",
	},
	{
		id: 2,
		image: quan5,
		title: "Document management",
		team_size: "3",
		tech_stack: "ReactJs, TailwindCss, Redux, Ant Design",
		github: "https://github.com/KAN19/website-giao-viec-quan-5",
		live_demo: "https://demo-giao-viec-basic.vercel.app/",
	},
	{
		id: 3,
		image: movie,
		title: "Movie Website",
		team_size: "3",
		tech_stack: "ReactJs, TailwindCss, Redux, Ant Design, Typescript",
		github: "https://github.com/phongvanngo/oo-movie",
		live_demo: "https://oo-movie-kan19.vercel.app",
	},
	{
		id: 4,
		image: IMG6,
		title: "Pets food online shop",
		team_size: "3",
		tech_stack: "HTML/CSS, Jquery, Laravel",
		github: "https://github.com/KAN19/Meow-Shop",
		live_demo: "",
	},
	{
		id: 5,
		image: dongphuong,
		title: "E-commerce and blog website",
		team_size: "5",
		tech_stack: "ReactJs, NextJs, TailwindCss, Redux, Ant Design",
		github: "",
		live_demo: "",
	},
];
