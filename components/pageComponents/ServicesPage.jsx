import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";
import Head from "next/head";


/**
 * Array containing service objects with details.
 * @property {string} num - Service number.
 * @property {string} title - Title of the service.
 * @property {string} description - Description of the service.
 * @property {string} href - Link URL for the service.
 */
const servicesPage = [
	{
		num: "01",
		title: "Long-term employment",
		description:
			"Depending on my current employment situation I am available to join your team as a full-stack" +
			" developer. Please check out my resume or contact me to determine weather I'd be suitable for the position" +
			" you are trying to fill.",
		href: "",
	},
	{
		num: "02",
		title: "Custom Website Development",
		description: `I offer custom web page development services tailored to your needs. My services include:<br/><br/>
    - Initial construction. Costs and maintenance are fees based on the complexity of the project.<br/>
    - A domain name of your choice.<br/>
    - An email service for customer inquiries via the contact page.<br/>
    - Tools to track traffic and website performance.<br/><br/>
    Additionally, I will provide you with several design proposals so you can select the one that best suits your taste.`,
		href: ""
	},
	{
		num: "03",
		title: "User Interface Design",
		description:
			"If you want a custom and unique design for you webpage, I am able to create this for you using Figma. For" +
			" this I will need to charge extra.",
		href: "",
	},
];

/**
 * Services component displays a list of servicesPage with titles, descriptions, and links.
 *
 * @returns {JSX.Element} Services component.
 */
const ServicesPage = () => {
	return (
		<>
			<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<motion.div
						initial={{opacity: 0}}
						animate={{
							opacity: 1,
							transition: {delay: 0.2, duration: 0.3, ease: "easeIn"},
						}}
						className="grid grid-cols-1 md:grid-cols-1 gap-[60px]"
					>
						{servicesPage.map((service, index) => {
							return (
								<div
									key={index}
									className="flex-1 flex flex-col justify-start gap-6 group"
								>
									{/* top */}
									<div className="w-full flex justify-between items-center">
										<div
											className="text-5xl font-extrabold text-text-light dark:text-text-dark">
											{service.num}
										</div>
										{/*<Link*/}
										{/*	href={service.href}*/}
										{/*	className="w-[70px] h-[70px] rounded-full b dark:bg-light group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"*/}
										{/*>*/}
										{/*	<BsArrowDownRight className="text-primary text-3xl"/>*/}
										{/*</Link>*/}
									</div>
									{/* title */}
									<h2 className="text-[42px] font-bold leading-none text-text-light dark:text-text-dark">
										{service.title}
									</h2>
									{/* description */}
									<p className="text-text-light/60 dark:text-text-dark/60"
									   dangerouslySetInnerHTML={{__html: service.description}}></p>
									{/* border */}
									<div className="border-b border-dark/80 dark:border-light/80 w-full"></div>
								</div>
							);
						})}
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ServicesPage;
