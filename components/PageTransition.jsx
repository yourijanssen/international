// "use client";
//
// import { useTransitionContext } from "@/context/TransitionContext";
// import { AnimatePresence, motion } from "framer-motion";
// import {useEffect} from "react";
// import {useRouter} from "next/router";
//
// const PageTransition = ({ children }) => {
//     const { isTransitioning, setIsTransitioning } = useTransitionContext();
//     const router = useRouter();
//
//     useEffect(() => {
//         const handleTransitionEnd = () => {
//             setIsTransitioning(false);
//         };
//         const timer = setTimeout(handleTransitionEnd, 1000); // Adjust duration as needed
//
//         return () => {
//             clearTimeout(timer);
//             setIsTransitioning(true); // Reset transition state when unmounting
//         };
//     }, [setIsTransitioning]);
//
//     if (isTransitioning) {
//         return <div className="transition-overlay">Loading...</div>; // Transition overlay
//     }
//
//         return (
//     <AnimatePresence>
//       <div>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{
//             opacity: 0,
//             transition: { delay: 0, duration: 1, ease: "easeInOut" },
//           }}
//           className="h-screen w-screen fixed top-0 pointer-events-none text-accent"
//         />
//         {children}
//       </div>
//     </AnimatePresence>
//   );
// };
//
// export default PageTransition;
