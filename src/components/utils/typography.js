import Typography from 'typography';
import Github from 'typography-theme-github';

const typography = new Typography(Github);

Github.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    fontFamily: 'Karla'
  }
});

typography.injectStyles();

export default typography;

