import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'green': '#015A36',
        'opacity-green': 'rgba(41, 163, 152, 0.1)',
        'light-green': '#C7FFE8'
      },
      colors: {
        'green': 'rgba(41, 163, 152, 0.1)'
      },
      textColor: {
        'green': '#015A36'
      },
      borderColor: {
        'green': '#015A36',
        'opacity-green': 'rgba(41, 163, 152, 0.3)'
      }
    },
  },
  plugins: [],
}
export default config
