import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const MuiButton = styled(Button)(({ theme, variant }) => ({
    borderRadius: 8,
    padding: '12px 32px',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',

    // High-End Active Click Feedback
    '&:active': {
        transform: 'scale(0.94) translateY(1px)',
        backgroundColor: 'rgba(0, 43, 91, 0.95)',
        boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.2)', // Inner depth effect
        transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
    },

    ...(variant === 'contained' && {
        background: theme.palette.primary.main,
        color: '#fff',
        '&:hover': {
            background: '#003d80',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgba(0, 43, 91, 0.3)',
        },
    }),
    ...(variant === 'outlined' && {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
        color: theme.palette.primary.main,
        '&:hover': {
            borderWidth: 2,
            background: 'rgba(0, 43, 91, 0.05)',
            borderColor: theme.palette.primary.main,
            transform: 'translateY(-2px)',
        },
    }),
}));

export default MuiButton;
