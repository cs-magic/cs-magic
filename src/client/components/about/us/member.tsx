import { clsx } from 'clsx'
import Image from 'next/image'
import ImgMoZhen from '../../../../../public/images/members/mozhen.png'
import { useTranslation } from 'next-i18next'
import { LocaleNameSpace } from '@/ds/locales'
import { ICommonLocale } from '@/@types/resources'
import { Separator } from '@/client/components/ui/separator'

const MemberProperty = (props: {
	name: keyof ICommonLocale['Team']['Member']
	value?: string
}) => {
	const { t } = useTranslation()
	
	if (!props.value) return null
	
	return (
		<tr className={'text-sm flex space-x-2'}>
			<td className={'w-[2.5rem] shrink-0'}>{t(`common:Team.Member.${props.name}`)}</td>
			<td><Separator orientation={'vertical'}/></td>
			<td>{props.value}</td>
		</tr>
	)
}


export const Member = ({ nameKey }: {
	nameKey: string
}) => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	const figure: string | null = t(`Team.${nameKey}.Figure`)
	const hasFigure = figure && figure.startsWith('/')
	const gender = t(`Team.${nameKey}.Gender`)
	
	
	return (
		<div className={'group grow flex flex-wrap md:flex-nowrap gap-2 bg-card text-gray-400'}>
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
			
			<table className={'grow m-4'}>
				<tbody className={'space-y-2'}>
				<MemberProperty name={'Name'} value={t(`manufacture:Team.${nameKey}.Name`)}/>
				<MemberProperty name={'Title'} value={t(`manufacture:Team.${nameKey}.Title`)}/>
				<MemberProperty name={'Desc'} value={t(`manufacture:Team.${nameKey}.Desc`)}/>
				{/*<MemberProperty name={'Sign'} value={t(`manufacture:Team.${nameKey}.Sign`)}/>*/}
				</tbody>
			</table>
		</div>
	)
}
