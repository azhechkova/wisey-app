import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  video: {
    borderRadius: '1rem',
    width: '100%',
    height: 'calc(100% - 36px)',
    '@media (max-width: 992px)': {
      height: 'calc(100% - 82px)',
    },
  },
  root: {
    height: '100%',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'flex-start',
    },
  },
  infoText: {
    padding: '6px 8px',
  },
}));

export default useStyles;
