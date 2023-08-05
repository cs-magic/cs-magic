import { z } from 'zod'
import { GET_PROMPTS_BATCH_SIZE, IFlowgptBasicPrompt, IFlowgptComment, IFlowgptFullPrompt, SortOrder } from '@/ds/flowgpt'
import { t } from '../createRouter'

export const idInput = z.object({
	id: z.string(),
})

const singleFetch = async (props: { path: string, j: object }) => {
	const input = encodeURI(JSON.stringify({ '0': props.j }))
	const url = `https://flowgpt.com/api/trpc/${props.path}?batch=1&input=${input}`
	// console.log(`[API] fetching: ${url}`)
	return (await (await fetch(url, { cache: 'no-cache' })).json())[0].result.data.json
}


export const flowgptRoutes = t.router({
	
	
	// getPrompt: procedure
	// 	.input(idInput)
	// 	.query<IFlowgptPrompt>(async (opts) => {
	// 		return samplePromptData
	// 	}),
	
	// getSimilarPrompts: procedure
	// .input(idInput)
	// .query<IFlowgptPrompt[]>(async (opts) => {
	// 	return
	// }),
	
	listPrompts: t.procedure
		.input(
			z.object({
				cursor: z.number().nullish(),
				order: z.nativeEnum(SortOrder).optional(),
			}),
		)
		.query<{ data: IFlowgptBasicPrompt[], nextCursor: number | undefined }>(async (opts) => {
			const skip = opts.input.cursor ?? 0
			const sort = opts.input.order ?? SortOrder.recommend
			const j = {
				'json': { sort, skip, 'tag': null, 'q': null, 'language': 'en' },
				'meta': { 'values': { 'tag': ['undefined'], 'q': ['undefined'] } },
			}
			const data = await singleFetch({ path: 'prompt.getPrompts', j })
			const nextCursor = data.length < GET_PROMPTS_BATCH_SIZE ? undefined : skip + GET_PROMPTS_BATCH_SIZE
			return { data, nextCursor }
		}),
	
	getPrompt: t.procedure
		.input(idInput)
		.query<IFlowgptFullPrompt>(async (opts) => {
			const j = {
				'json': opts.input.id,
			}
			const data = await singleFetch({ path: 'prompt.getById', j })
			return data
		}),
	
	listComments: t.procedure
		.input(idInput)
		.query<IFlowgptComment[]>(async (opts) => {
			const j = {
				'json': {
					'type': 'prompt',
					'id': opts.input.id,
				},
			}
			const data = await singleFetch({ path: 'comment.getComments', j })
			return data
		}),
})

// export type definition of API
export type FlowgptRouter = typeof flowgptRoutes;
