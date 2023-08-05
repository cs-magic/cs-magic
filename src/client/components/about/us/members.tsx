import { useTranslation } from 'next-i18next'
import { Member } from '@/client/components/about/us/member'
import { groups } from '@/config'

export const Members = () => {
	const { t } = useTranslation()
	
	
	return (
		<div className={'w-full flex flex-wrap gap-8 justify-center'}>
			{
				Object.entries(groups)
					.map(([cat, members]) => (
						<div key={cat} className={'w-full'}>
							<h2>{t(`common:Team.Category.${cat}`)}</h2>
							<div className={'flex flex-wrap justify-start not-prose gap-2'}>
								{
									members
										.map((member) => <Member nameKey={member} key={member}/>)
								}
							</div>
						</div>
					))
			}
		</div>
	
	)
}
