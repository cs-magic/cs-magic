import { MemberDataTable } from '@/client/components/about/us/member.data'
import { MemberFigure } from '@/client/components/about/us/member.figure'
import { useTranslation } from 'next-i18next'
import { LocaleNameSpace } from '@/ds/locales'


export const Member = ({ nameKey }: {
	nameKey: string
}) => {
	const { t } = useTranslation(LocaleNameSpace.manufacture)
	
	return (
		<div className={'group grow flex flex-wrap md:flex-nowrap gap-2 bg-card text-gray-400'}>
			<MemberFigure nameKey={nameKey}/>
			
			<MemberDataTable namKey={nameKey}/>
		</div>
	)
}
