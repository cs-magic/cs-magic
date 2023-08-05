import manufacture from '../../public/locales/zh-CN/manufacture.json'
import common from '../../public/locales/zh-CN/common.json'

export type ICommonLocale = typeof common
export type IManufactureLocale = typeof manufacture

const resources = {
	common,
	manufacture,
} as const

export default resources
