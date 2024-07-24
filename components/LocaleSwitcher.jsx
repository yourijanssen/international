import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LocaleSwitcher = () => {
	const { i18n } = useTranslation();
	const router = useRouter();
	const { locale, asPath } = router;

	const handleChange = (event) => {
		const newLocale = event.target.value;
		console.log(`Switching to locale: ${newLocale}`);
		router.push(asPath, asPath, { locale: newLocale });
	};

	return (
		<select value={locale} onChange={handleChange} className="text-accent hover:text-blue-700 underline bg-transparent border-none">
			<option value="en" className="text-accent hover:text-blue-700 underline bg-transparent border-none">en</option>
			<option value="nl" className="text-accent hover:text-blue-700 underline bg-transparent border-none">nl</option>
		</select>
	);
};



export default LocaleSwitcher;
