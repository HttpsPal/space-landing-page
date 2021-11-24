module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		letterSpacing: {
			bigger: "1px",
			biggest: "2.7px",
		},
		extend: {
			backgroundImage: {
				"space-dt": "url('../../public/home/background-home-desktop.jpg')",
				"space-tb": "url('../../public/home/background-home-tablet.jpg')",
				"space-mb": "url('../../public/home/background-home-mobile.jpg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
