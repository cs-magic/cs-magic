import manufacture from '~/locales/zh-CN/manufacture.json'
import common from '~/locales/zh-CN/common.json'

export type ICommonLocale = typeof common
export type IManufactureLocale = typeof manufacture

const resources = {
	common,
	manufacture,
} as const

export default resources
