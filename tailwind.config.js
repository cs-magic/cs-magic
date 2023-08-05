/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				
				shadow: "var(--shadow)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {height: 0},
					to: {height: "var(--radix-accordion-content-height)"},
				},
				"accordion-up": {
					from: {height: "var(--radix-accordion-content-height)"},
					to: {height: 0},
				},
				"backdrop-ring": {
					'0%, 100%': {
						backdropFilter: "brightness(10%)",
					},
					'50%': {
						backdropFilter: "brightness(50%)",
					}
				}
			},
			backgroundImage: {
				'ai-anatomy': "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1))," +
					" url('/images/bg/ai-anatomy-map@0.5x-裁切版.jpg')",
				'ai-anatomy-sm': "url('/images/bg/ai-anatomy-map-手机端@0.5x.png')",
			},
			
			animation: {
				
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"backdrop-ring": "backdrop-ring 5s ease-in-out infinite",
			},
			textShadow: { // 需要额外设置
				douyin: "1px 1px 2px red, 0 0 1rem blue, 0 0 0.2rem blue;"
			},
			dropShadow: {
				DEFAULT: "0 0 5px var(--shadow)",
				lg: "0 0 20px var(--shadow)",
			},
		},
	},
	plugins: [
		// 不要加，重复matchUtility： require("tailwindcss-animate"),
		
		require('@tailwindcss/typography'),
		
		require('tailwindcss/plugin')(function ({addVariant, matchUtilities, theme}) {
			addVariant('not-first', '&:not(first-child)') // ref: https://www.reddit.com/r/tailwindcss/comments/s3wka1/comment/hspmjxo/?utm_source=share&utm_medium=web2x&context=3
			addVariant('not-last', '&:not(last-child)')
			
			addVariant("hocus", ["&:hover", "&:focus"])
			
			matchUtilities( // ref: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{values: theme('textShadow')}
			)
			
		}),
	
	],
}
