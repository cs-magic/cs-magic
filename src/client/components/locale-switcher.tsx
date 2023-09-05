import { useTranslation } from 'next-i18next'
import { LocaleNameSpace, LocaleType } from '@/ds/locales'
import { useSwitchLocale } from '@/client/hooks/use-locale'
import { IconLanguage } from '@tabler/icons-react'
import { ICON_SIZE_MD } from '@/config'

export const LocaleSwitcher = () => {
	const { t, i18n } = useTranslation(LocaleNameSpace.manufacture)
	const switchLocale = useSwitchLocale()
	return (
		<IconLanguage
			
			className={'cursor-pointer shrink-0 text-muted-foreground hocus:text-accent-foreground'}
			size={ICON_SIZE_MD}
			onClick={() => {
				switchLocale(i18n.language === LocaleType.zh_CN ? LocaleType.en : LocaleType.zh_CN)
			}}/>
	)
}
