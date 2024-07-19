import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
	const pathname = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -50 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
