/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			amatic: ["Amatic SC", "cursive"],
			montserrat: ["Montserrat", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#c8a2c8",
				secondary: "#7971b4",
			},
		},
	},
	plugins: [],
};
