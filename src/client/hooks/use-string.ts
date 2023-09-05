import { useSimplifiedChinese } from './use-locale'

export const useSeparator = () => {
	return useSimplifiedChinese() ? '、' : ', '
}
