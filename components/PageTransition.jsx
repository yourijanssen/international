"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0, duration: 1, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 pointer-events-none text-accent"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
