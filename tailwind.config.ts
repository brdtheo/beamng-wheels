import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // match BeamNG global theme
        'bng-theme-bg': '#fff',
        'bng-theme-text': '#000',
        'bng-theme-dim-text': '#666',
        'bng-theme-a': '#507A95',
        'bng-theme-a-heading': '#405481',
        'bng-theme-a-hover': '#DF5900',
        'bng-theme-input-bg': '#DADEE8',
        'bng-theme-input-hover': '#f2f4f6',
        'bng-theme-special-bg': '#507A95',
        'bng-theme-scroll': '#f60',
        'bng-theme-scroll-bg': '#E5E9F2',
        'bng-theme-hr': '#ddd',
      },
    },
  },
};
export default config;
