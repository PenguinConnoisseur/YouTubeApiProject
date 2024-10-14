/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Use 'media' for automatic based on user's preference
    content: [
        "./src/**/*.{html,js}", // Adjust based on your file structure
        "./Views/**/*.{cshtml}", // For ASP.NET MVC
       // "./wwwroot/**/*.{html,cshtml,js}", // Adjust based on your file structure
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

