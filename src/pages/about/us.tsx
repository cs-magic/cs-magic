import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DEFAULT_LOCALE_TYPE, LocaleNameSpace } from '@/ds/locales'
import { useTranslation } from 'next-i18next'
import { Members } from '@/client/components/about/us/members'
import { VerticalLayout } from '@/client/layouts/vertical.layout'
import localFont from 'next/font/local'
import { clsx } from 'clsx'

export const aboutUsFont = localFont({ src: '../../../public/fonts/VonwaonBitmap-16px.ttf' })

export const AboutUsPage = () => {
	const { t } = useTranslation()
	
	return (
		<VerticalLayout globalFont={aboutUsFont}>
			<div className={clsx(
				'w-full grow flex-center flex-col bg-ai-anatomy bg-cover bg-center',
			)}>
				<div className={'w-full grow animate-backdrop-ring flex-center flex-col'}>
					<div className="p-4 md:p-8 lg:p-16 w-full max-w-[1024px] grow flex-center flex-col space-y-12">
						<div className={'w-full prose md:prose-lg lg:prose-xl p-8 bg-white/75 '}>
							
							<h2>{t('common:General.About') + t('manufacture:Company.FullName')}</h2>
							
							<p>{t('manufacture:Company.Intro.Basic')}</p>
							<p>{t('manufacture:Company.Intro.Team')}</p>
							<p>{t('manufacture:Company.Intro.Products')}</p>
							
							<Members/>
						
						</div>
					</div>
				</div>
			</div>
		
		
		</VerticalLayout>
	)
}

export default AboutUsPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const localeData = await serverSideTranslations(locale ?? DEFAULT_LOCALE_TYPE, [
		LocaleNameSpace.manufacture,
		LocaleNameSpace.common,
	])
	return {
		props: localeData,
	}
}
