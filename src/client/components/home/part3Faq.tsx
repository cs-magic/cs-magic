import { useTranslation } from 'next-i18next'
import resources from '@/@types/resources'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/client/components/ui/accordion'
import { clsx } from 'clsx'
import ReactMarkdown from 'react-markdown'

export const Part3Faq = () => {
	const { t } = useTranslation()
	const questions = Object.keys(resources.manufacture.FAQ)
	
	return (
		<div className={'px-4 w-full h-full flex flex-col items-center gap-2'}>
			<h1 className={clsx('text-4xl p-16 bg-clip-text text-transparent linear')}>
				{t('common:HomePage.FAQ')}
			</h1>
			
			<Accordion type="multiple" className="mb-16" defaultValue={[]}>
				{
					/**
					 * todo: extra buttons:
					 * - Competitiveness: [ChatGPT试用](/trial/chatgpt) [MidJourney试用](/trial/midjourney) [插件市场](/plugins)
					 * - Subscription: [会员计划](/membership) [共享计划](/genki)
					 * - TargetUser: [开源计划](/opensource) [贡献人员展示](/contributors)
					 * - Business: [商业合作](/collaboration) [合作企业展示](/businesses)
					 * - Investment: [投资计划](/investment) [投资白皮书](/bp)
					 */
					questions.map((item) => (
						<AccordionItem value={item} key={item}>
							<AccordionTrigger className={'w-full gap-2 text-left text-sm md:text-md lg:text-lg'}>{t(`manufacture:FAQ.${item}.question`)}</AccordionTrigger>
							<AccordionContent>
								<article className={clsx('prose dark:prose-invert text-muted-foreground')}>
									<ReactMarkdown>
										{t(`manufacture:FAQ.${item}.answer`)}
									</ReactMarkdown>
								</article>
							</AccordionContent>
						</AccordionItem>
					))
				}
			</Accordion>
		</div>
	)
}
