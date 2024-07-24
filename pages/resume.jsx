
import Head from "next/head";
import ResumePage from "@/pages/pageComponents/ResumePage";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Resume = ({...props}) => {
	return (
		<>
			<Head>
				<title>Youri Janssen | Resume</title>
			</Head>
			<ResumePage {...props}/>
		</>
	);
};


export default Resume;

