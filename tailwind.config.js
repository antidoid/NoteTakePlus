/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#e6e6e6",
				secondary: "#6c63ff2e",
				link: "#9747FF",
				gainsboro: "#DCDCDC",
				whitesmoke: "#F5F5F5",
			},
			fontFamily: {
				Inter: ["Inter, sans-serif"],
			},
		},
	},
	plugins: [],
};
