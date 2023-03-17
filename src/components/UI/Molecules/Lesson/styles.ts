import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  video: {
    borderRadius: '1rem',
    width: '100%',
    height: '100%',
  },
  videoWrap: {
    height: '500px',
  },
}));

export default useStyles;
