import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useSidebarStore = create(
	combine({
		collapsed: false,
	}, (set) => ({
		collapse: () => set((state) => ({ collapsed: !state.collapsed })),
	})),
)
