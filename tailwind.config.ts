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
        'cyan': '#29A398'
      },
      colors: {
        'cyan': 'rgba(41, 163, 152, 0.1)'
      },
      textColor: {
        'cyan': '#29A398'
      },
      borderColor: {
        'cyan': '#29A398'
      }
    },
  },
  plugins: [],
}
export default config
