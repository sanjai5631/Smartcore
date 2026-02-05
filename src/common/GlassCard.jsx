import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 32,
    border: `1px solid ${theme.palette.mode === 'light' ? '#E5E7EB' : 'rgba(255, 255, 255, 0.05)'}`,
    boxShadow: theme.palette.mode === 'light'
        ? '0 10px 30px -5px rgba(10, 31, 68, 0.04)'
        : '0 10px 40px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.5s cubic-bezier(0.24, 0.74, 0.58, 1)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1,
    cursor: 'pointer',
    backgroundImage: 'none',
    '&:hover': {
        transform: 'translateY(-12px)',
        borderColor: theme.palette.secondary.main,
        boxShadow: theme.palette.mode === 'light'
            ? '0 40px 80px -15px rgba(249, 115, 22, 0.15)'
            : '0 40px 80px -15px rgba(59, 130, 246, 0.2)',
        '& .icon-box': {
            transform: 'scale(1.1) rotate(5deg)',
            boxShadow: theme.palette.mode === 'light'
                ? '0 15px 30px rgba(249, 115, 22, 0.3)'
                : '0 15px 30px rgba(59, 130, 246, 0.4)',
            backgroundColor: theme.palette.secondary.main,
            color: '#FFFFFF'
        },
        '& .desc-text': {
            opacity: 1,
            maxHeight: '200px',
            transform: 'translateY(0)',
            marginTop: theme.spacing(2)
        },
        '& .card-accent': {
            width: '100%',
        }
    }
}));

export const CardAccent = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '0%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    transition: 'width 0.4s ease',
    zIndex: 3
}));

export default GlassCard;
