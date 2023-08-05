import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DEFAULT_LOCALE_TYPE, LocaleNameSpace } from '@/ds/locales'
import { GetServerSideProps } from 'next'
import { VerticalLayout } from '@/client/layouts/vertical.layout'
import { Part1Cover } from '@/client/components/home/part1.cover'
import { Part2Features } from '@/client/components/home/part2.features'
import { Part4Community } from '@/client/components/home/part4.community'
import { Part0Light } from '@/client/components/home/part0.light'
import { Part3Faq } from '@/client/components/home/part3Faq'

export default function HomePage() {
	
	return (
		<VerticalLayout>
			
			<Part0Light/>
			
			<div className={'w-full max-w-[1080px] mx-auto h-full flex flex-col py-4 md:py-8 lg:py-16 gap-28 xl:gap-32'}>
				
				<Part1Cover/>
				
				<Part2Features/>
				
				<Part3Faq/>
				
				<Part4Community/>
			
			</div>
		
		</VerticalLayout>
	)
}


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const localeData = await serverSideTranslations(locale ?? DEFAULT_LOCALE_TYPE, [
		LocaleNameSpace.manufacture,
		LocaleNameSpace.common,
	])
	
	return {
		props: localeData,
	}
}
