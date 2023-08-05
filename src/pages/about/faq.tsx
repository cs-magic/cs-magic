import { VerticalLayout } from '@/client/layouts/vertical.layout'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DEFAULT_LOCALE_TYPE, LocaleNameSpace } from '@/ds/locales'
import { Part3Faq } from '@/client/components/home/part3Faq'

export const FaqPage = () => {
	
	
	return (
		<VerticalLayout>
			<Part3Faq/>
		</VerticalLayout>
	)
}

export default FaqPage


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const localeData = await serverSideTranslations(locale ?? DEFAULT_LOCALE_TYPE, [
		LocaleNameSpace.manufacture,
		LocaleNameSpace.common,
	])
	
	return {
		props: localeData,
	}
}
