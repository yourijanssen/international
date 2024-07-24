
import Head from "next/head";
import ResumePage from "@/pages/pageComponents/ResumePage";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getServerSideProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Resume = () => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>Youri Janssen | Resume</title>
			</Head>
			<ResumePage t={t}/>
		</>
	);
};


export default Resume;

