import { makeStyles } from 'tss-react/mui';

interface StyleProps {
  isLocked: boolean;
  isActive?: boolean;
  isFinished?: boolean;
}

const useStyles = makeStyles<StyleProps>()(
  (theme, { isLocked, isActive, isFinished }) => ({
    root: {
      padding: '0.75rem 1rem',
      paddingRight: isFinished ? '2rem' : '1rem',
      borderRadius: '0.75rem',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      width: '100%',
      gap: '0.75rem',
      border: '2px solid',
      borderColor: 'transparent',
      backgroundColor: isActive ? theme.palette.primary.light : '#fff',
      cursor: 'pointer',
      opacity: isLocked ? '0.5' : 1,
    },
    info: {
      textAlign: 'left',
    },
    checkIcon: {
      position: 'absolute',
      right: '0.75rem',
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
  }),
);

export default useStyles;
