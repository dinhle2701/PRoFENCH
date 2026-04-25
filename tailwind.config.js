/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',  // Đảm bảo rằng component của bạn nằm trong content
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  