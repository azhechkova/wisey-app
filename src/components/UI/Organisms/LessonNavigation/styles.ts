import { makeStyles } from 'tss-react/mui';

type StyleProps = {
  isOpen: boolean;
};

const useStyles = makeStyles<StyleProps>()((_, { isOpen }) => ({
  root: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    background: '#fff',
    height: '100vh',
    zIndex: 10,
    visibility: isOpen ? 'visible' : 'hidden',
    pointerEvents: isOpen ? 'all' : 'none',
    transform: isOpen ? 'translateX(0)' : 'translateX(-500px)',
    transition: 'all ease .5s',
  },
  content: {
    height: '100%',
    overflow: 'auto',
    padding: '2rem 0.5rem',
  },
  title: {
    marginBottom: '1rem',
    padding: '0 1rem',
    fontWeight: 600,
  },
}));

export default useStyles;
