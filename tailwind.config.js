/** @type {import('tailwindcss').Config} */
module.exports = {
	content:[
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme:{
		colors:{
			brand:"#f5006b",
			brandHover:"#db0060",
			gray:"#383838",
			white:"#FFFFFF",
			orange:"#E35A43",
			purple:"#8338EC"
		},
		container:{
			padding:{
				DEFAULT:'1rem',
				ph:'1rem',
				sm:'1rem',
				md:'1rem',
				lg:'1rem',
				xl:'2rem',
				'2xl':'2rem',
			},
		},
		screens:{
			'ph':'400px',
			// => @media (min-width: 400px) { ... }
			'ph5':'500px',
			// => @media (min-width: 400px) { ... }

			'sm':'600px',
			// => @media (min-width: 640px) { ... }

			'md':'768px',
			// => @media (min-width: 768px) { ... }

			'lg':'1024px',
			// => @media (min-width: 1024px) { ... }

			'xl':'1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl':'1594px',
			// => @media (min-width: 1562px) { ... }
		},
		extend:{},
	},
	plugins:[],
}
