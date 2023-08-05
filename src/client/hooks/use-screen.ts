import { useViewportSize } from '@mantine/hooks'

export const useSmallScreen = () => {
	const { width } = useViewportSize()
	return width <= 640 // see tailwind.config.js
}
