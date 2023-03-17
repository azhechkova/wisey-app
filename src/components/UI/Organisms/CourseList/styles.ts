import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1em',
    margin: '50px 0',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 572px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  button: {
    margin: '0 auto',
    display: 'block',
  },
}));

export default useStyles;
