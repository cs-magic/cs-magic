import { useTranslation } from 'next-i18next'
import { LocaleNameSpace } from '@/ds/locales'
import Head from 'next/head'
import { uri } from '../../../config'

export const CompanyHeader = () => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	return (
		<Head>
			<title>{t('Company.FullName')}</title>
			<meta name="description" content={t('Company.Slogan')}/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="icon" href={uri.companyLogoIco}/>
		</Head>
	)
}

export const ProductHeader = () => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	return (
		<Head>
			<title>{t('Product.Name')}</title>
			<meta name="description" content={t('Product.Desc')}/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="icon" href={uri.productLogoIco}/>
		</Head>
	)
}
