import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  video: {
    borderRadius: '1rem',
    width: '100%',
    height: '100%',
  },
  videoWrap: {
    height: '800px',
    '@media (max-width: 1500px)': {
      height: '610px',
    },
    '@media (max-width: 992px)': {
      height: '500px',
    },
    '@media (max-width: 572px)': {
      height: '400px',
    },
  },
  title: {
    marginBottom: '2rem',
  },
}));

export default useStyles;
