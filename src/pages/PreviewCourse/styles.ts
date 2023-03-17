import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    padding: '2rem',
    backgroundColor: 'rgb(246, 246, 247)',
    minHeight: '100vh',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '310px 1fr',
    gap: '10px',
    marginTop: '2rem',
    '@media (max-width: 992px)': {
      gridTemplateColumns: '250px 1fr',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: '20px',
    },
  },
  courseName: {
    marginBottom: '1rem',
  },
}));

export default useStyles;
