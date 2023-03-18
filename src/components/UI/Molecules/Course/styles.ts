import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    height: 'auto',
    width: '100%',
    '&:hover': {
      transform: 'scale(1.025)',
      transition: 'transform ease .5s',
    },
  },
  card: {
    height: '100%',
    boxShadow:
      'rgba(24, 39, 75, 0.12) 0px 8px 18px -6px, rgba(24, 39, 75, 0.12) 0px 12px 42px -4px',
    borderRadius: '1em',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  list: {
    padding: '0',
  },
  listItem: {
    padding: '0',
  },
  description: {
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    marginTop: '0.75rem',
  },
  info: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  video: {
    objectFit: 'cover',
  },
  lessonsCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
}));

export default useStyles;
