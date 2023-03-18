import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    backgroundColor: 'rgb(246, 246, 247)',
    minHeight: '100vh',
  },
  content: {
    padding: '3em 2em',
    maxWidth: '1400px',
    margin: '0 auto',
  },
}));

export default useStyles;
