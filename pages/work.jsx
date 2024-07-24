import Head from "next/head";
import WorkPage from "@/pages/pageComponents/WorkPage";
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

const Work = () => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>Youri Janssen | Work</title>
			</Head>
			<WorkPage t={t}/>
		</>
	);
};

export default Work;
