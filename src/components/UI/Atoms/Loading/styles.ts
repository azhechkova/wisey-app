import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  loadingWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default useStyles;
