import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaAngular,
	FaJava,
	FaNpm,
	FaRegFilePowerpoint,
	FaRegFileWord,
	FaGitSquare,
	FaGithub,
	FaGitlab, FaFileExcel, FaBlender,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiSpringboot,
	SiSpringsecurity,
	SiSpring,
	SiTypescript,
	SiApachemaven,
	SiMariadb,
	SiGimp,
	SiAdobepremierepro,
	SiAdobephotoshop,
	SiExpress,
	SiEslint,
	SiMocha,
	SiDbeaver,
	SiMacos,
	SiSequelize,
	SiHibernate,
	SiJest,
	SiChai,
	SiReactivex,
	SiPrettier,
	SiAutodeskrevit,
	SiApachetomcat,
	SiStylus, SiSvg, SiIos
} from "react-icons/si";

// about data
const about = {
	title: "About",
	description: "Aboutdes",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Youri Janssen",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+31) 6 47 22 39 84",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Dutch",
		},
		{
			fieldName: "Status",
			fieldValue: "Student / Freelancing",
		},
		{
			fieldName: "Email",
			fieldValue: "yourijanssen123@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Dutch, German",
		},
	],
};

// experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "experience",
	description:
		"experiencedes",
	items: [
		{
			company: "Freelancer: Custom web pages",
			position: "Full-stack Developer",
			duration: "2024 - Present",
		},
		{
			company: "IRP/BIMKeeper: Web-based building management system",
			position: "Full-stack Developer",
			duration: "2023 - Present",
		},

	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "education",
	description:
		"educationdes",
	items: [
		{
			institution: "HVA",
			degree: "Software Development - Associate Degree",
			duration: "2022 - 2024",
		},
		{
			institution: "HKU",
			degree: "Art & Economics - Bachelor of Arts",
			duration: "2016 - 2021",
			file: "/assets/HBO Bachelor Kunst en Economie (Art and Economics).pdf",
		},
		{
			institution: "HKU",
			degree: "Art & Economics - Propaedeutic year",
			duration: "2017",
			file: "/assets/HBO Bachelor Kunst en Economie Propedeuse bachelor (Art and Economics).pdf",
		},
		{
			institution: "College voor Toetsen en Examens",
			degree: "Voorbereidend wetenschappelijk onderwijs (VWO)",
			duration: "2015",
			file: "/assets/Voorbereidend wetenschappelijk onderwijs (staatsexamen).pdf",
		},
		{
			institution: "Scholengemeenschap Oost/Zuidoost",
			degree: "Hoger algemeen voortgezet onderwijs (HAVO)",
			duration: "2009 - 2014",
			file: "/assets/Hoger algemeen voortgezet onderwijs.pdf",
		},

	],
}


// courses data
const courses = {
	icon: "/assets/resume/cap.svg",
	title: "courses",
	description:
		"coursesdes",
	items: [
		{
			icon: "/assets/resume/courses/nextjs.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/nextjs-from-scratch/9781836207979/"
		},
		{
			icon: "/assets/resume/courses/fluent.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/fluent-react/9781098138707/"
		},
		{
			icon: "/assets/resume/courses/18react.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/security.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/jakarta.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/reactmaxi.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/architecture.png",
			name: "Fluent React",
			year: "2024",
			link: "https://learning.oreilly.com/library/view/software-architecture-patterns/9781491971437/"
		},
		{
			icon: "/assets/resume/courses/devops.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/networking.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/uml.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/angular.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/nodejs.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/modernjavascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/mysql.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/javascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/htmlcss.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},


	],
};

// skills data
const skills = {
	title: "skills",
	description1:
		"skillsdes",
	description2:
		"skillsdes2",
	year: "2022",
	skillList: [
		{
			icon: <FaHtml5/>,
			name: "html 5",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/HTML5",
		},
		{
			icon: <DiMongodb/>,
			name: "MongoDB",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/MongoDB",
		},
		{
			icon: <SiPrettier/>,
			name: "Prettier",
			year: 2023,
			link: "https://prettier.io/docs/en/",
		},
		{
			icon: <SiJest/>,
			name: "Jest",
			year: 2023,
			link: "https://jestjs.io/",
		},
		{
			icon: <FaCss3/>,
			name: "css 3",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/CSS",
		},
		{
			icon: <FaJs/>,
			name: "javascript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/JavaScript",
		},
		{
			icon: <SiTypescript/>,
			name: "Typescript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/TypeScript",
		},
		{
			icon: <SiMariadb/>,
			name: "MariaDB",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/MariaDB",
		},
		{
			icon: <BiTerminal/>,
			name: "Terminal",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Computer_terminal",
		},
		{
			icon: <BsAndroid/>,
			name: "Android OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Android_(operating_system)",
		},

		{
			icon: <DiLinux/>,
			name: "Linux OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Linux",
		},
		{
			icon: <SiIos/>,
			name: " IOS",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/IOS",
		},
		{
			icon: <SiStylus/>,
			name: "Stylus",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Stylus_(style_sheet_language)",
		},
		{
			icon: <SiSvg/>,
			name: "SVG",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/SVG",
		},
		{
			icon: <SiAutodeskrevit/>,
			name: "Revit",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Autodesk_Revit",
		},
		{
			icon: <SiApachetomcat/>,
			name: "Tomcat",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Tomcat",
		},
		{
			icon: <SiGimp/>,
			name: "Gimp",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/GIMP",
		},
		{
			icon: <SiAdobepremierepro/>,
			name: "Premier Pro",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Premiere_Pro",
		},
		{
			icon: <SiAdobephotoshop/>,
			name: "Photoshop",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
		},
		{
			icon: <FaBlender/>,
			name: "Blender",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Blender_(software)",
		},
		{
			icon: <SiDbeaver/>,
			name: "DBeaver",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/DBeaver",
		},
		{
			icon: <GiJasmine/>,
			name: "Jasmine",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Jasmine_(software)",
		},
		{
			icon: <SiEslint/>,
			name: "ESlint",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/ESLint",
		},
		{
			icon: <SiMocha/>,
			name: "Mocha",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)",
		},
		{
			icon: <TbBrandThreejs/>,
			name: "Three.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Three.js",
		},
		{
			icon: <SiExpress/>,
			name: "Express.Js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Express.js",
		},
		{
			icon: <GrMysql/>,
			name: "MySql",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/MySQL",
		},
		{
			icon: <FaReact/>,
			name: "react.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
		},
		{
			icon: <SiNextdotjs/>,
			name: "next.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Next.js",
		},
		{
			icon: <SiTailwindcss/>,
			name: "tailwind.css",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
		},
		{
			icon: <FaNodeJs/>,
			name: "node.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Node.js",
		},
		{
			icon: <FaFigma/>,
			name: "figma",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Figma",
		},
		{
			icon: <FaAngular/>,
			name: "angular",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/AngularJS",
		},
		{
			icon: <FaJava/>,
			name: "java",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
		},
		{
			icon: <BsWindows/>,
			name: "Windows OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Windows",
		},
		{
			icon: <DiScrum/>,
			name: "Scrum",
			year: 2017,
			link: "https://en.wikipedia.org/wiki/Scrum_(software_development)",
		},
		{
			icon: <SiSequelize/>,
			name: "Sequelize",
			year: 2023,
			link: "https://sequelize.org/",
		},
		{
			icon: <SiHibernate/>,
			name: "Hibernate",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Hibernate_(framework)",
		},
		{
			icon: <TbFileTypeXml/>,
			name: "XML",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/XML",
		},
		{
			icon: <SiChai/>,
			name: "Chai",
			year: 2023,
			link: "https://www.chaijs.com/",
		},
		{
			icon: <PiMicrosoftTeamsLogo/>,
			name: "Teams",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Microsoft_Teams",
		},
		{
			icon: <SiReactivex/>,
			name: "RxJS",
			year: 2023,
			link: "https://rxjs.dev/",
		},

		{
			icon: <SiMacos/>,
			name: "Mac OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/MacOS",
		},
		{
			icon: <SiApachemaven/>,
			name: "Apache Maven",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Maven",
		},
		{
			icon: <SiSpring/>,
			name: "Spring",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Framework",
		},
		{
			icon: <SiSpringboot/>,
			name: "Spring Boot",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Boot",
		},
		{
			icon: <SiSpringsecurity/>,
			name: "Spring Security",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Spring_Security",
		},
		{
			icon: <VscVscode/>,
			name: "VSCode",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Visual_Studio_Code",
		},
		{
			icon: <DiIntellij/>,
			name: "Intellij",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/IntelliJ_IDEA",
		},
		{
			icon: <FaNpm/>,
			name: "NPM",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Npm",
		},
		{
			icon: <FaGitSquare/>,
			name: "Git",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Git",
		},
		{
			icon: <FaGithub/>,
			name: "GitHub",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/GitHub",
		},
		{
			icon: <FaGitlab/>,
			name: "GitLab",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/GitLab",
		},
		{
			icon: <FaRegFilePowerpoint/>,
			name: "Powerpoint",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_PowerPoint",
		},
		{
			icon: <FaRegFileWord/>,
			name: "Word",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Word",
		},
		{
			icon: <FaFileExcel/>,
			name: "Excel",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_Excel",
		},
	],
};

const groupSkillsByYear = (skillList) => {
	return skillList.reduce((acc, skill) => {
		const {year} = skill;
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(skill);
		return acc;
	}, {});
};

const skillsByYear = groupSkillsByYear(skills.skillList);

const handleSkillClick = (link) => {
	if (link) {
		window.open(link, '_blank');
	}
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import {DegreeDownload} from "@/components/Downloads";
import {VscVscode} from "react-icons/vsc";
import {DiIntellij, DiLinux, DiMongodb, DiScrum} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import {GiJasmine} from "react-icons/gi";
import {TbBrandThreejs, TbFileTypeXml} from "react-icons/tb";
import {BsAndroid, BsWindows} from "react-icons/bs";
import {PiMicrosoftTeamsLogo} from "react-icons/pi";
import {BiTerminal} from "react-icons/bi";
import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import BarExample from "@/components/bar";
import {useTranslation} from "next-i18next";

const ResumePage = ({t}) => {
	const {t: translate} = useTranslation('common');

	return (
		<>
			<motion.div
				initial={{opacity: 0}}
				animate={{
					opacity: 1,
					transition: {delay: 0.2, duration: 0.3, ease: "easeIn"},
				}}
				className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
			>
				<div className="container mx-auto">
					<Tabs
						defaultValue="experience"
						className="flex flex-col xl:flex-row gap-[60px]"
					>
						<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
							<TabsTrigger value="experience">{translate("experienceTab")}</TabsTrigger>
							<TabsTrigger value="about">{translate("aboutTab")}</TabsTrigger>
							<TabsTrigger value="education">{translate("educationTab")}</TabsTrigger>
							<TabsTrigger value="skills">{translate("skillsTab")}</TabsTrigger>
							<TabsTrigger value="courses">{translate("coursesTab")}</TabsTrigger>
						</TabsList>

						{/* content */}
						<div className="min-h-[70vh] w-full">
							{/* experience */}
							<TabsContent value="experience" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{translate(experience.title)}</h3>
									<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
										{translate(experience.description)}
									</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{experience.items.map((item, index) => {
												return (
													<li
														key={index}
														className="dark:bg-[#232329] bg-[#CCCCCC] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
													>
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-text-light/80 dark:text-text-dark">
															{item.position}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span
																className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-text-light/80 dark:text-text-dark/60">{item.company}</p>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>

							{/* education */}
							<TabsContent value="education" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{translate(education.title)}</h3>
									<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
										{translate(education.description)}
									</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{education.items.map((item, index) => {
												return (
													<li
														key={index}
														className="dark:bg-[#232329] bg-[#CCCCCC] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-start items-start lg:items-start gap-1"
													>
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-text-light/80 dark:text-text-dark">
															{translate(item.degree)}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span
																className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-text-light/80 dark:text-text-dark/60">{translate(item.institution)}</p>
														</div>
														<div className="flex flex-col xl:flex-row items-center gap-8">
															<DegreeDownload url={item.file}/>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>

							{/* Favourite Courses */}
							<TabsContent value="courses" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{translate(courses.title)}</h3>
									<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
										{translate(courses.description)}
									</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{courses.items.map((item, index) => {
												return (
													<li
														key={index}
														className="dark:bg-[#232329] bg-[#CCCCCC] h-[300px] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
													>
														<div className="flex flex-col xl:flex-row items-center gap-8">
															<Image src={item.icon} alt="" width="196" height="257"
																   className="items-center"/>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>


							{/* skills */}
							<TabsContent value="skills" className="w-full h-full">
								<div className="flex flex-col gap-[30px]">
									<div className="flex flex-col gap-[30px] text-center xl:text-left">
										<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{translate(skills.title)}</h3>
										<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
											{translate(skills.description1)}
										</p>
										<BarExample/>
									</div>

									<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
										{translate(skills.description2)}
									</p>
									{Object.keys(skillsByYear).sort((a, b) => b - a).map((year) => (
										<div key={year} className="mb-8">
											<h3 className="text-2xl mb-4 text-text-light dark:text-text-dark">{year}</h3>
											<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
												{skillsByYear[year].map((skill, index) => (
													<li key={index} onClick={() => handleSkillClick(skill.link)}>
														<TooltipProvider delayDuration={100}>
															<Tooltip>
																<TooltipTrigger
																	className="w-full h-[150px] rounded-xl flex flex-col justify-center items-center group dark:bg-[#232329] bg-[#CCCCCC] text-text-light dark:text-text-dark"
																>
																	<div
																		className="text-6xl group-hover:text-accent transition-all duration-300">
																		{skill.icon}
																	</div>
																	<p className="mt-2 text-center capitalize">{skill.name}</p> {/* Added skill name */}
																</TooltipTrigger>
																<TooltipContent>
																	<p className="capitalize">{skill.name}</p>
																</TooltipContent>
															</Tooltip>
														</TooltipProvider>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</TabsContent>

							{/* about */}
							<TabsContent
								value="about"
								className="w-full text-center xl:text-left"
							>
								<div className="flex flex-col gap-[30px]">
									<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{translate(about.title)}</h3>
									{/* Typist component for animated description */}
									<TypingAnimation text={translate(about.description)}/>
									<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
										{about.info.map((item, index) => {
											return (
												<li
													key={index}
													className="flex items-center justify-center xl:justify-start gap-4"
												>
												<span
													className="text-text-light/60 dark:text-text-dark/60">{item.fieldName}:</span>
													<span
														className="text-xl text-text-light dark:text-text-dark">{item.fieldValue}</span>
												</li>
											);
										})}
									</ul>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</motion.div>
		</>
	);
};

export default ResumePage;
