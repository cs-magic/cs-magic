import { ICommonLocale } from '@/@types/resources'
import { ReactNode } from 'react'

export type MenuType = keyof ICommonLocale['Menu']

export interface IMenu {
	icon: ReactNode
	href: string
}
