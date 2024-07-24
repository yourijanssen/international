import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {useTranslation} from "next-i18next";


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
		titleKey: "long",
		descriptionKey: "longdes",
		href: "",
	},
	{
		num: "02",
		titleKey: "custom",
		descriptionKey: "customdes",
		href: "",
	},
	{
		num: "03",
		titleKey: "interface",
		descriptionKey: "interfacedes",
		href: "",
	},
];

/**
 * Services component displays a list of servicesPage with titles, descriptions, and links.
 *
 * @returns {JSX.Element} Services component.
 */
const ServicesPage = ({t}) => {
	const {t: translate} = useTranslation('common');

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
						{servicesPage.map((service, index) => (
							<div
								key={index}
								className="flex-1 flex flex-col justify-start gap-6 group"
							>
								{/* top */}
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-text-light dark:text-text-dark">
										{service.num}
									</div>
									{/* Uncomment and use the Link component if needed */}
									{/* <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full b dark:bg-light group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
								</div>
								{/* title */}
								<h2 className="text-[42px] font-bold leading-none text-text-light dark:text-text-dark">
									{translate(service.titleKey)}
								</h2>
								{/* description */}
								<p
									className="text-text-light/60 dark:text-text-dark/60"
									dangerouslySetInnerHTML={{__html: translate(service.descriptionKey)}}
								></p>
								{/* border */}
								<div className="border-b border-dark/80 dark:border-light/80 w-full"></div>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</>
	);
};

// Define PropTypes for the component to validate the props
ServicesPage.propTypes = {
	t: PropTypes.func.isRequired, // Expect `t` to be a function
};

export default ServicesPage;



