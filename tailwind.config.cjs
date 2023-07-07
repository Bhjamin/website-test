/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			screens: {

				xs: '425px',
				xxs: '350px'

			},

			backgroundSize: {
				'300': '300%',
				'75': '75%'
			},

			backgroundPosition: {
				'80-55': '80% 55%',
				'50-10': '50% 10%',
				'75': '75% 0%'
			},

			keyframes: {

				shake: {
					'0%': { transform: 'rotate(0.0deg)'},
					'10%': { transform: 'rotate(-20deg)'},
					'20%': { transform: 'rotate(20deg)'},
					'30%': { transform: 'rotate(-20deg)'},
					'40%': { transform: 'rotate(0.0deg)'},
					'50%': { transform: 'rotate(0.0deg)'},
					'60%': { transform: 'rotate(0.0deg)'},
					'70%': { transform: 'rotate(0.0deg)'},
					'80%': { transform: 'rotate(0.0deg)'},
					'90%': { transform: 'rotate(0.0deg)'},
					'100%': { transform: 'rotate(0.0deg)'},

				}
			},
			animation: {
				'shaking-phone': 'shake .75s ease-in-out infinite'
			},

			fontFamily: {
				'GT-Haptik': ['GT-Haptik']
			},
		},
	},
	plugins: [],
}
