import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    padding: '3em 2em',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  loadingWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default useStyles;
