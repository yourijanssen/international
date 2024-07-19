// // contexts/TransitionContext.js
// import { createContext, useContext, useState } from 'react';
//
// const TransitionContext = createContext();
//
// export const useTransitionContext = () => useContext(TransitionContext);
//
// export const TransitionProvider = ({ children }) => {
// 	const [isTransitioning, setIsTransitioning] = useState(true);
//
// 	return (
// 		<TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
// 			{children}
// 		</TransitionContext.Provider>
// 	);
// };
