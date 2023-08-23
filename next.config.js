const {i18n} = require('./next-i18next.config')

const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: i18n,
	trailingSlash: true,
	distDir: process.env.DIST ?? ".next",
	
	// ref: https://nextjs.org/docs/api-reference/next/image#remote-patterns
	images: {
		remotePatterns: [// ref:https://stackoverflow.com/a/73951135/9422455
			{protocol: "http", hostname: "**"},
			{protocol: "https", hostname: "**"},
		]
	},
	
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)
		
		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: {not: /url/}, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		)
		
		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i
		
		return config
	},
	
}

module.exports = withFonts(nextConfig)
