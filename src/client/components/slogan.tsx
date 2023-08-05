import { clsx } from 'clsx'
import { useTranslation } from 'next-i18next'
import { LocaleNameSpace } from '@/ds/locales'
import { useSimplifiedChinese } from '@/client/hooks/use-locale'

export const Slogan = () => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	
	const isChinese = useSimplifiedChinese()
	
	
	return (
		<div className={clsx(
			'text-xl md:text-3xl lg:text-6xl flex flex-col gap-2 text-gray-300 text-shadow-douyin transition-all',
			isChinese && 'tracking-[1rem]',
		)}>
			{[
				isChinese ? '「' : '',
				t('Company.Slogan'),
				isChinese ? '」' : '',
			].join('').split('\n').map((line, key) => (<p key={key}>{line}</p>))}
		</div>
	
	)
}
