import { useSimplifiedChinese } from '@/client/hooks/use-locale'

export const useSeparator = () => {
	return useSimplifiedChinese() ? '、' : ', '
}
