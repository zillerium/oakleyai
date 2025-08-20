// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Catches all files in src
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // If using Pages Router
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',   // If using App Router
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
