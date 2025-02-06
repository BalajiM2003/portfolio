/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans JSX files
    theme: {
        extend: {
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    corePlugins: {
        dropShadow: true, // Ensure drop-shadow is enabled
    },
    plugins: [],
};
