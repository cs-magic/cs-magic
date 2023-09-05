import { useSimplifiedChinese } from '@/client/hooks/use-locale'
import { clsx } from 'clsx'
import { Button } from '@/client/components/ui/button'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import { uri } from '@/config'
import { useTranslation } from 'next-i18next'
import ReactMarkdown from 'react-markdown'

export const Part1Cover = () => {
	const {t} = useTranslation()
	const isChinese = useSimplifiedChinese()
	
	return (
		<div className={clsx('w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#0E131B] ')}>
			
			<div className={clsx(
				'w-full flex flex-col justify-center z-10 px-8  gap-[1rem] md:gap-8 ',
				// 'bg-cyan-900',
				//	todo: flex-wrap with responsive for mobile
			)}>
				
				<div className={clsx(
					'w-full flex flex-col text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap gap-[0.5rem] md:gap-4',
					isChinese && 'tracking-[0.3rem]',
				)}>
					<p>
						<span>{t("common:General.At")}</span>
						<span className={'text-linear'}>{t("manufacture:Company.FullName")}</span>
					</p>
						<span>{t("manufacture:Company.Vision")}</span>
				</div>
				
				<div className={clsx(
					'w-full whitespace-normal flex flex-col gap-2',
					'text-muted-foreground',
				)}>
					<ReactMarkdown>
						{t("manufacture:Company.Intro.Desc")}
					</ReactMarkdown>
				</div>
				
				{/*<div className={clsx(*/}
				{/*	'flex items-center w-fit gap-[0.5rem]',*/}
				{/*	'flex-row md:flex-col',*/}
				{/*)}>*/}
				{/*	<Button className={'btn-primary'}>*/}
				{/*		{t("common:HomePage.BtnCreateAccount")} 🚀*/}
				{/*	</Button>*/}
				{/*	<p className={'text-sm text-muted-foreground font-light hidden md:block'}>{t("common:HomePage.BtnCreateAccountDesc")}</p>*/}
				{/*</div>*/}
			
			</div>
			
			
			<div className={'relative w-full md:w-[600px] '}>
				<AspectRatio ratio={1}>
					<Image src={uri.images.explore} alt={'explore'} fill sizes={'w-[1080px]'} className={clsx(
						'lg:translate-x-20 lg:-translate-y-5 lg:scale-110',
						'border-none',
					)}/>
				</AspectRatio>
			</div>
		</div>
	)
}
