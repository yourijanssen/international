import Head from "next/head";

import ServicesPage from "@/pages/pageComponents/ServicesPage";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Services = () => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>Youri Janssen | Services</title>
			</Head>
			<ServicesPage t={t} />
		</>
	);
};

export default Services;

