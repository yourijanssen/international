import Head from "next/head";
import WorkPage from "@/pages/pageComponents/WorkPage";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Work = ({...props}) => {

	return (
		<>
			<Head>
				<title>Youri Janssen | Work</title>
			</Head>
			<WorkPage {...props}/>
		</>
	);
};

export default Work;
