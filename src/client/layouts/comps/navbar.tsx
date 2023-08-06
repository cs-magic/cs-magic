import { useTranslation } from 'next-i18next'
import { useSimplifiedChinese } from '@/client/hooks/use-locale'
import { clsx } from 'clsx'
import Link from 'next/link'
import { uri } from '@/config'
import { NavigationMenu, NavigationMenuList } from '@/client/components/ui/navigation-menu'
import { IconUser } from '@tabler/icons-react'
import { Button } from '@/client/components/ui/button'
import { CompanyLogo } from '../../utils/loader'
import { Avatar, AvatarFallback } from '@/client/components/ui/avatar'
import { LocaleSwitcher } from '@/client/components/locale-switcher'
import { useViewportSize } from '@mantine/hooks'
import { useSmallScreen } from '@/client/hooks/use-screen'

export const Navbar = () => {
	const { t } = useTranslation()
	const isChinese = useSimplifiedChinese()
	const isSmallScreen = useSmallScreen()
	
	return (
		<nav className={clsx(
			'fixed top-0 z-50 bg-black/[.50] backdrop-blur-lg w-full flex py-3 px-4 lg:px-8 justify-between items-center font-light gap-2',
		)}>
			
			<div className={clsx('inline-flex-center gap-2 px-2')}>
				<Link className={'inline-flex-center gap-2 whitespace-nowrap'} href={uri.home}>
					<CompanyLogo width={32} height={32}/>
					<h1 className={clsx(
						// 'font-semibold',
						isChinese && 'tracking-[0.3rem]',
					)}>
						{t('manufacture:Company.FullName')}
					</h1>
				</Link>
			</div>
			
			<div className={'flex items-center gap-2'}>
				<NavigationMenu className={clsx(
					// 'hidden',
				' md:flex'
				)}>
					<NavigationMenuList className={'gap-2 md:gap-4 inline-flex whitespace-nowrap'}>
						
						<LocaleSwitcher/>
						
						<Link href={uri.product.playground} legacyBehavior passHref className={'bg-cyan-900'}>
							<div>
								<Button
									className={clsx(
									// 'hidden md:block',
									'btn-primary  ',
									isChinese && 'tracking-[0.1rem]',
								)}>
									{t(`common:HomePage.BtnStartUse${isSmallScreen ? 'Sm' : ''}`)}
								</Button>
								
								<Avatar className={clsx(
									'hidden',
									// 'md:hidden',
									'cursor-pointer'
								)}>
									<AvatarFallback>
										<IconUser/>
									</AvatarFallback>
								</Avatar>
							</div>
						</Link>
					
					</NavigationMenuList>
				</NavigationMenu>
			
			</div>
		
		
		</nav>
	)
}
