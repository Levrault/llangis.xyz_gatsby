import Typography from 'typography';
import Github from 'typography-theme-github';

Github.headerFontFamily = ['Babyblocks'];
Github.bodyFontFamily = ['Babyblocks'];

const typography = new Typography(Github);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;

