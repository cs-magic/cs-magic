import { ICommonLocale } from '@/@types/resources'
import { useTranslation } from 'next-i18next'
import _ from 'lodash'
import { Separator } from '@/client/components/ui/separator'
import { LocaleNameSpace } from '@/ds/locales'
import { IMemberBase } from '@/ds/user'

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

export const MemberDataTable = ({ namKey }: { namKey: string }) => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	
	return (
		<table className={'grow m-4'}>
			<tbody className={'space-y-2'}>
			<MemberProperty name={'Name'} value={t(`manufacture:Team.${namKey}.Name`)}/>
			<MemberProperty name={'Title'} value={t(`manufacture:Team.${namKey}.Title`)}/>
			<MemberProperty name={'Desc'} value={t(`manufacture:Team.${namKey}.Desc`)}/>
			{/*<MemberProperty name={'Sign'} value={t(`manufacture:Team.${namKey}.Sign`)}/>*/}
			</tbody>
		</table>
	)
}
