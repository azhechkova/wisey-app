import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  tag: {
    border: '2px solid',
    background: 'transparent',
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    textTransform: 'capitalize',
    margin: '0.5em',
    borderRadius: '4px',
  },
}));

export default useStyles;
