import Link from "next/link";
import {Button} from "./ui/button";

// components

import MobileNav from "./MobileNav";
import DarkModeToggle from "@/components/DarkModeToggle";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<motion.section
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {delay: 0.2, duration: 0.3, ease: "easeIn"},
			}}
			className="py-6"
		>
			<header className="py-8 xl:py-12 text-white">
				<div className="container mx-auto flex justify-between items-center">
					{/* logo */}
					<Link href="/">
						<h1 className="text-4xl font-semibold text-text-light dark:text-text-dark">
							Youri<span className="text-accent">.</span>
						</h1>
					</Link>
					<DarkModeToggle/>
					{/* desktop nav & hire me button */}
					<div className="hidden xl:flex items-center gap-8">
						<Nav/>
						<Link href="/contact">
							<Button>Hire me</Button>
						</Link>
					</div>

					{/* mobile nav */}
					<div className="xl:hidden">
						<MobileNav/>
					</div>
				</div>
			</header>
		</motion.section>
	);
};

export default Header;
