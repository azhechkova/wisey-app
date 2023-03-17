import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    height: '100%',
    width: '100%',
    background: theme.palette.primary.light,
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.palette.text.primary,
    fontSize: '45px',
    '@media (max-width: 768px)': {
      fontSize: '30px',
    },
  },
  content: {
    textAlign: 'center',
  },
  icon: {
    height: '100px',
    width: '100px',
    '@media (max-width: 768px)': {
      height: '70px',
      width: '70px',
    },
  },
}));

export default useStyles;
