import localFont from 'next/font/local'


export const uri = {
	images: {
		AiMap: '/images/bg/ai-anatomy-map@0.5x-裁切版.jpg',
		explore: '/images/mj/home-cover.png',
		carousal: {
			explore: '/images/mj/carousel-explore.png',
			competition: '/images/mj/carousel-peace.png',
		},
	},
	companyLogoIco: '/icons/logo/m/32_purple_white.ico',
	productLogoIco: '/icons/logo/m/32_purple_white.ico',
	home: '/',
	auth: {
		login: '/auth/login',
		register: '/auth/register',
	},
	about: {
		us: '/about/us',
		faq: '/about/faq',
	},
	product: {
		playground: 'https://lumos.cs-magic.com',
	},
}


export const beian = {
	domainMatch: /cs-magic.cn/,
	title: '苏ICP备2023015349号',
}

export const mossSlogan = '-.-. ... -....- -- .- --. .. -.-. .-.-.- .- ..'

export const dotFont = localFont({ src: '../public/fonts/DottedSongtiSquare(1).ttf' })
export const bitFont = localFont({ src: '../public/fonts/VonwaonBitmap-16px.ttf' })

export const LOGO_SIZE_LG = 36
export const ICON_SIZE_MD = 28
export const ICON_SIZE_SM = 20
export const ICON_SIZE_XS = 16

export const groups = {
	"Founders": [
		"Mark",
		"Nicole"
	],
	"Core": [
		"Susan",
		"Clotho",
		"Lara",
		"Cynthia",
		"Yimi"
	],
	"Advisory": [
		"Nirva",
		"Joy",
		"Ella"
	]
}
