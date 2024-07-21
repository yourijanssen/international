import {useRouter} from "next/router";
import {CVDownload} from "@/components/Downloads";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import {Commit} from '@/components/Commit';
import { motion } from "framer-motion";
import Head from "next/head";
import {useTranslation} from 'next-i18next';
import ResumePage from "@/components/pageComponents/ResumePage";
import ServicesPage from "@/components/pageComponents/ServicesPage";
import ContactPage from "@/components/pageComponents/ContactPage";
import WorkPage from "@/components/pageComponents/WorkPage";

const Home = () => {
	const {locale, locales, push} = useRouter();

	return (
		<>

			<Head>
				<title>Youri Janssen</title>
			</Head>
			{/*<h1>{locale}</h1>*/}

			{/*<div>*/}
			{/*<h3>with link</h3>*/}
			{/*    <h1>choose your language</h1>*/}
			{/*    {locales.map(l => (*/}
			{/*        <h4 key={l}>*/}
			{/*            <Link href={`/`} locale={l}>*/}
			{/*                {l}*/}
			{/*            </Link>*/}
			{/*        </h4>*/}
			{/*    ))}*/}
			{/*</div>*/}
			{/*    <Footer/>*/}

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
								<span
									className="text-xl text-text-light dark:text-text-dark">Full-stack developer</span>
								<h1 className="h1 mb-6 text-text-light dark:text-text-dark">
									Hello I'm <br/> <span className="text-accent">Youri Janssen</span>
								</h1>
								<p className="max-w-[500px] mb-9 text-text-light dark:text-text-dark">
									Welcome to my portfolio page! Here you'll find information about me and my projects.
									If you have any questions or would like to get in touch, please visit the contact
									page.
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
								{/*<div className="container mx-auto xl:text-left">*/}
								{/*    <p className="text-text-light dark:text-text-dark">Page last updated*/}
								{/*        on: {commitDate}</p>*/}
								{/*</div>*/}
							</div>
							{/* photo */}
							<div className="order-1 xl:order-none mb-8 xl:mb-0">
								<Photo/>
							</div>
						</div>
					</div>
					<Stats/>
				</section>
				<ResumePage/>
				<WorkPage/>
				<ServicesPage/>
				<ContactPage/>
			</motion.section>
		</>
	);
}


export default Home
