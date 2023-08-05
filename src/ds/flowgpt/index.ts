import { sampleComment } from '@/ds/flowgpt/sample/comment'
import { sampleConversation } from '@/ds/flowgpt/sample/conversation'
import { sampleBasicPrompt } from '@/ds/flowgpt/sample/prompt'

export type IFlowgptComment = typeof sampleComment
export type IFlowgptBasicPrompt = typeof sampleBasicPrompt
export type IFlowgptConversation = typeof sampleConversation

export interface IFlowgptFullPrompt extends IFlowgptBasicPrompt {
	Conversation: IFlowgptConversation
}

export enum AgentAspect {
	detail = 'detail',
	// comments = 'comments',
	// sample = 'sample',
	history = 'history',
	conversation = 'conversation'
}

export enum SortOrder {
	new = 'new',
	
	recommend = 'recommend',
	trending = 'trending',
	following = 'following',
	top = 'top'
}

export const GET_PROMPTS_BATCH_SIZE = 36
