import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    gap: '5px',
  },
  icon: {
    height: '50px',
    width: '50px',
  },
}));

export default useStyles;
