import { useTranslation } from 'next-i18next'
import { useSimplifiedChinese } from '@/client/hooks/use-locale'
import { clsx } from 'clsx'
import { LinkTree } from '@/client/components/link-tree'
import { beian, bitFont, mossSlogan, uri } from '@/config'
import { isCurUrlDomestic } from '@/client/utils/host'
import Link from 'next/link'
import { CompanyLogo } from '../../utils/loader'

export const Footer = () => {
	const { t } = useTranslation()
	const isSimplifiedChinese = useSimplifiedChinese()
	
	return (
		<>
			<div className={'w-full flex flex-wrap justify-between items-center bg-black border-t lg:gap-32 px-16 lg:px-32 py-8 gap-12 mt-8 '}>
				
				<div className={'flex flex-col justify-center items-center gap-4 shrink-0 w-full md:w-fit order-last md:order-first'}>
					<div className={'flex items-center gap-4 text-2xl '}>
						{/*<Image src={assets.Logo} alt={'logo'} width={36} height={36}/>*/}
						<CompanyLogo width={36} height={36}/>
						<p className={clsx(
							'text-xl font-light',
							bitFont.className,
							isSimplifiedChinese && 'tracking-[0.5rem]',
						)}>{t('manufacture:Company.Slogan')}</p>
					</div>
					
					
					<p className={'-ml-1 text-white animate-pulse'}>{mossSlogan}</p>
				</div>
				
				<div className={'grid grid-flow-col justify-center gap-12 w-full md:w-fit cols-auto'}>
					<LinkTree title={'About'} items={[
						{ title: t('common:HomePage.links.FAQ'), href: uri.about.faq },
						{ title: t('common:HomePage.links.AboutUS'), href: uri.about.us },
					]}/>
					
					<LinkTree title={'Products'} items={[
						{ title: t('manufacture:Product.Name'), href: uri.product.playground },
					]}/>
				
				</div>
			</div>
			
			{
				isCurUrlDomestic() && (
					<Link className={'fixed bottom-2 w-screen flex-center text-muted-foreground underline'} href="https://beian.miit.gov.cn/" target="_blank">
						备案号：{beian.title}
					</Link>
				)
			}
		</>
	)
}
