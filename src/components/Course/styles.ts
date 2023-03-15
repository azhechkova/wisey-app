import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  card: {
    maxWidth: 345,
    boxShadow:
      'rgba(24, 39, 75, 0.12) 0px 8px 18px -6px, rgba(24, 39, 75, 0.12) 0px 12px 42px -4px',
    borderRadius: '1em',
  },
  content: {
    padding: '1em',
  },
  listItem: {
    padding: '0.5em 0',
  },
}));

export default useStyles;
