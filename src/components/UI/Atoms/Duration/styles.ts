import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  text: {
    fontSize: '0.8rem',
  },
  icon: {
    height: '12px',
    width: '12px',
  },
}));

export default useStyles;
