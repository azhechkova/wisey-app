import { makeStyles } from 'tss-react/mui';

interface StyleProps {
  isLocked: boolean;
  isActive?: boolean;
}

const useStyles = makeStyles<StyleProps>()((theme, { isLocked, isActive }) => ({
  root: {
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    display: 'flex',
    width: '100%',
    gap: '0.75rem',
    border: '2px solid',
    borderColor: isActive ? theme.palette.secondary.main : 'transparent',
    backgroundColor: '#fff',
    cursor: 'pointer',
    opacity: isLocked ? '0.5' : 1,
  },
  info: {
    textAlign: 'left',
  },
  icon: {
    height: '48px',
    width: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '0.75rem',
    fontWeight: 500,
  },
}));

export default useStyles;
