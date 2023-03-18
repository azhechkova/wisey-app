import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    padding: '2rem',
    backgroundColor: 'rgb(246, 246, 247)',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  courseName: {
    marginBottom: '1rem',
  },
}));

export default useStyles;
