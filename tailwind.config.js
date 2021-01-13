module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		colors: {
			pink: {
				100: '#FFF6F5',
				400: '#FAD5D1',
				500: '#F19197',
			},
			gray: {
				100: '#F3F4F6',
				300: '#D1D5DB',
				400: '#9CA3AF',
				700: '#374151',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
