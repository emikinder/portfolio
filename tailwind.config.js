/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "inherit": "inherit",
            },
            fontFamily: {
                "alfaSlabOne": "alfaSlabOne",
            },
        },
        colors: {
            p_primary: "#0081C9",
            p_secondary: "#8EAC50",
            tertiary: "#3F3F3F",
            quaternary: "#4F4F4F",
        },
    },
    plugins: [],
};
