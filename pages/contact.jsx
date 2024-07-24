import Head from "next/head";
import ContactPage from "@/pages/pageComponents/ContactPage";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context) => {
	console.log('Context:', context); // Check if `locale` is present

	const locale = context.locale; // Default to 'en' if locale is not available

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Contact = ({...props}) => {

	return (
		<>
			<Head>
				<title>Youri Janssen | Contact</title>
			</Head>
			<ContactPage {...props}/>
		</>
	);
};

export default Contact;
