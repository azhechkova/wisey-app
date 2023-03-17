import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  tag: {
    background: theme.palette.warning.main,
    textTransform: 'capitalize',
    margin: '0.5em',
  },
}));

export default useStyles;
