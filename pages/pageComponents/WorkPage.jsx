import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "bim",
		title: "",
		icon: "",
		description:
			"bimdes",
		stack: [{ name: "Tailwind" }, { name: "Three" }, { name: "MongoDB" }],
		image: "/assets/work/bimBuilder.png",
		live: "",
		github: "",
	},
	{
		num: "02 ",
		category: "Support Ticket System",
		title: "",
		description:
			"This was the first project I developed that is still actively used today. It consists of a ticketing system" +
			" that tracks all errors occurring across all the instances of the application. This system allows the" +
			" employees to have a real-time overview of the bugs and errors, enabling them to address issues consistently" +
			" and effectively, ensuring customer satisfaction. ",
		stack: [{ name: "Spring MVC" }, { name: "React" }, { name: "MariaDB" }],
		image: "/assets/work/ticketSystem.png",
		live: "",
		github: "",
	},
	// {
	//   num: "03",
	//   category: "School and hobby Projects",
	//   title: "project 2",
	//   description:
	//       "In the first year of my eduction, had to follow several courses to get a grasp of webdevelopment history",
	//   stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "MySql" }, { name: "Node.js" }],
	//   image: "/assets/work/avontuurMobile1.png",
	//   live: "",
	//   github: "",
	// },
];

const Work = ({t}) => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.realIndex;
		// update project state based on current slide index
		setProject(projects[currentIndex]);
	};

	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
				}}
				className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
			>
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div
							className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
						>
							<div className="flex flex-col gap-[30px] h-[50%]">
								{/* outline num */}
								<div className="text-5xl font-extrabold text-text-light dark:text-text-dark">
									{project.num}
								</div>
								{/* project category */}
								<h2 className="text-[42px] font-bold leading-none text-text-light dark:text-text-dark group-hover:text-accent transition-all duration-500 capitalize">
									{t(project.category)}
								</h2>
								{/* project description */}
								<p className="text-text-light/60 dark:text-text-dark/60">{t(project.description)}</p>
								{/* stack */}
								<ul className="flex gap-3">
									{project.stack.map((item, index) => {
										return (
											<li key={index} className="text-xl text-accent">
												{item.name}
												{/* remove the last comma */}
												{index !== project.stack.length - 1 && ","}
											</li>
										);
									})}
								</ul>
								{/* border */}
								<div className="border border-dark/80 dark:border-light/80"></div>
								{/* buttons */}
								<div className="flex items-center gap-4">
									{/* live project button */}
									{/*<Link href={project.live}>*/}
									{/*  <TooltipProvider delayDuration={100}>*/}
									{/*    <Tooltip>*/}
									{/*      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">*/}
									{/*        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />*/}
									{/*      </TooltipTrigger>*/}
									{/*      <TooltipContent>*/}
									{/*        <p>Live project</p>*/}
									{/*      </TooltipContent>*/}
									{/*    </Tooltip>*/}
									{/*  </TooltipProvider>*/}
									{/*</Link>*/}
									{/* Github project button */}
									{/*<Link href={project.github}>*/}
									{/*  <TooltipProvider delayDuration={100}>*/}
									{/*    <Tooltip>*/}
									{/*      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">*/}
									{/*        <BsGithub className="text-white text-3xl group-hover:text-accent" />*/}
									{/*      </TooltipTrigger>*/}
									{/*      <TooltipContent>*/}
									{/*        <p>Github repository</p>*/}
									{/*      </TooltipContent>*/}
									{/*    </Tooltip>*/}
									{/*  </TooltipProvider>*/}
									{/*</Link>*/}
								</div>
							</div>
						</div>
						<div className="w-full xl:w-[50%]">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								className="xl:h-[520px] mb-12"
								onSlideChange={handleSlideChange}
								loop={true}  // Enable loop for cyclic navigation
							>
								{projects.map((project, index) => {
									return (
										<SwiperSlide key={index} className="w-full">
											<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
												{/* overlay */}
												<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
												{/* image */}
												<div className="relative w-full h-full">
													<Image
														src={project.image}
														fill
														className="object-cover"
														alt=""
													/>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
								{/* slider buttons */}
								<WorkSliderBtns
									containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Work;
