/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        "home-banner": "url(./Assets/Pages/Home/home-banner.png)",
        "home-contact": "url(./Assets/Pages/Home/home-contact.png)"
      }
    },
  },
  plugins: [],
}

