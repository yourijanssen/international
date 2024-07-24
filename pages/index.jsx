import {CVDownload} from "@/components/Downloads";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import {Commit} from '@/components/Commit';
import { motion } from "framer-motion";
import Head from "next/head";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ContactPage from "@/pages/pageComponents/ContactPage";
import ServicesPage from "@/pages/pageComponents/ServicesPage";
import WorkPage from "@/pages/pageComponents/WorkPage";
import ResumePage from "@/pages/pageComponents/ResumePage";

const Home = () => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>Youri Janssen</title>
			</Head>
			<motion.section
				initial={{opacity: 0}}
				animate={{
					opacity: 1,
					transition: {delay: 0.2, duration: 0.3, ease: "easeIn"},
				}}
				className="py-6"
			>

				<section className="h-full">
					<div className="container mx-auto h-full">
						<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
							{/* text */}
							<div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl text-text-light dark:text-text-dark">
                  {t('fullStack')}
                </span>
								<h1 className="h1 mb-6 text-text-light dark:text-text-dark">
									{t('hello')} <br/> <span className="text-accent">Youri Janssen</span>
								</h1>
								<p className="max-w-[500px] mb-9 text-text-light dark:text-text-dark">
									{t('welcome')}
								</p>
								{/* btn and socials */}
								<div className="flex flex-col xl:flex-row items-center gap-8">
									<CVDownload/>
									<div className="mb-8 xl:mb-0">
										<Social
											containerStyles="flex gap-6"
											iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
										/>
									</div>
								</div>
								<Commit/>
							</div>
							{/* photo */}
							<div className="order-1 xl:order-none mb-8 xl:mb-0">
								<Photo/>
							</div>
						</div>
					</div>
					<Stats/>
				</section>
				<ResumePage t={t}/>
				<WorkPage t={t}/>
				<ServicesPage t={t}/>
				<ContactPage t={t}/>
			</motion.section>
		</>
	);
};

export const getServerSideProps = async (context) => {
	console.log('Context:', context); // Check if `locale` is present

	const locale = context.locale; // Default to 'en' if locale is not available

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Home
