// ✅ Correct for Tailwind CSS v4
import tailwindcss from '@tailwindcss/postcss';

export default {
  plugins: [
    tailwindcss,
    require('autoprefixer'),
  ],
};
