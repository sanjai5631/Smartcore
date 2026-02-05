import { Fab, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppFab = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Fab
            color="success"
            aria-label="whatsapp"
            href="https://wa.me/919080156420"
            target="_blank"
            sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                zIndex: 1000,
                bgcolor: '#25D366',
                color: 'white',
                boxShadow: isDark ? '0 0 25px rgba(37, 211, 102, 0.4)' : '0 10px 25px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    bgcolor: '#20BA56',
                    transform: 'scale(1.1) rotate(15deg)',
                    boxShadow: isDark ? '0 0 40px rgba(37, 211, 102, 0.6)' : '0 15px 35px rgba(37, 211, 102, 0.5)',
                },
                // Pulsing Glow Animation
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '2px solid #25D366',
                    animation: 'pulse-whatsapp 2s infinite ease-out',
                    opacity: 0
                },
                '@keyframes pulse-whatsapp': {
                    '0%': { transform: 'scale(0.8)', opacity: 0.8 },
                    '100%': { transform: 'scale(1.5)', opacity: 0 }
                }
            }}
        >
            <WhatsAppIcon fontSize="large" />
        </Fab>
    );
};

export default WhatsAppFab;
