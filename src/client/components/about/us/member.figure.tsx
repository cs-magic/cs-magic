import Image from 'next/image'
import ImgMoZhen from '../../../../../public/images/members/mozhen.png'
import { clsx } from 'clsx'
import { useTranslation } from 'next-i18next'
import { LocaleNameSpace } from '@/ds/locales'

export const MemberFigure = ({ nameKey }: {
	nameKey: string
}) => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	const figure: string | null = t(`Team.${nameKey}.Figure`)
	const hasFigure = figure && figure.startsWith('/')
	const gender = t(`Team.${nameKey}.Gender`)
	// console.log({ nameKey, figure, gender })
	
	return (
		<div key={nameKey} className={clsx(
			'w-full md:w-[200px] shrink-0 flex flex-col items-center justify-end',
		)}>
			<Image src={hasFigure ? figure : `/images/members/mysterious-${gender}.png`}
			       alt={nameKey}
			       className={'drop-shadow group-hover:drop-shadow-lg'}
			       width={160}
			       height={0}
			       style={{ width: 'auto' }} // 图像比例被修改了
			/>
			{hasFigure &&
		  <Image src={ImgMoZhen} alt={'MoZhen'} className={clsx(
						// 'drop-shadow',
						'group-hover:drop-shadow-lg',
						'-mt-24 -mb-12 ',
						'animate-pulse',
						'brightness-75',
					)} width={200}/>}
		</div>
	)
}
