import { useTranslation } from 'next-i18next'
import resources from '@/@types/resources'

export const Part2Features = () => {
	const { t } = useTranslation()
	
	return (
		<div className={'w-full grid grid-cols-1 md:grid-cols-3 divide-x items-start gap-[1rem]'}>
			{
				Object.keys(resources.manufacture.Company.Features).map((key, index) => (
					<div key={key} className={'w-full  flex flex-col justify-center items-center'}>
						<div className={'w-full md:w-[320px] flex flex-col justify-center items-center text-center gap-2'}>
							<h2 className={'text-2xl text-linear'}>{t(`manufacture:Company.Features.${key}.summary`)}</h2>
							{t(`manufacture:Company.Features.${key}.desc`).split('\n').map((line, index) => (
								<p key={index}>{line}</p>
							))}
						</div>
					</div>
				))
			}
		</div>
	)
}
