import { useTranslation } from 'next-i18next'
import { Member } from '@/client/components/about/us/member'
import { groupMembers } from '@/config'
import Link from 'next/link'
import { LoadingButton } from '@/client/components/LoadingButton'
import { useHasMounted } from '@/client/hooks/use-mount'


export const Members = () => {
	const { t, i18n } = useTranslation()
	
	const mounted = useHasMounted()
	
	return !mounted
		? <LoadingButton loading/>
		: (
			<div className={'w-full flex flex-wrap gap-8 justify-center'}>
				{
					Object.entries(groupMembers)
						.map(([cat, members]) => (
							<div key={cat} className={'w-full'}>
								<div className={'flex gap-2 items-end'}>
									<h2>{t(`common:Team.Category.${cat}`)}</h2>
									<p className={''}>（{t("common:General.AlphabetOrder")}）</p>
								</div>
								<div className={'flex flex-wrap justify-start not-prose gap-2'}>
									{
										members
											.sort((a, b) => t(`manufacture:Team.${a}.Name`).localeCompare(t(`manufacture:Team.${b}.Name`), i18n.language))
											.map((nameKey) =>
												cat === 'Community'
													? (
														<Link href={`mailto:${t(`Team.${nameKey}.Mail`)}`} className={'underline'} key={nameKey}>
															{t(`Team.${nameKey}.Name`)}
														</Link>
													)
													: <Member nameKey={nameKey} key={nameKey}/>)
									}
								</div>
							</div>
						))
				}
			</div>
		
		)
}
