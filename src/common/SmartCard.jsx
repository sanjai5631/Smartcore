import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box)(({ theme }) => ({
    height: '294px',
    width: '240px',
    margin: 'auto',
    perspective: '800px',
    fontFamily: theme.typography.fontFamily,
    '&:hover .flipper-card': {
        cursor: 'pointer',
        transform: 'rotateX(180deg) rotateZ(-180deg)',
    }
}));

const FlipperCard = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '2rem',
    position: 'relative',
    transition: 'transform 1500ms',
    transformStyle: 'preserve-3d',
}));

const CardSide = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    borderRadius: '2rem',
    boxShadow: theme.palette.mode === 'light' ? '0px 4px 20px rgba(10, 31, 68, 0.08)' : '0px 10px 40px rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.mode === 'light' ? '#E5E7EB' : 'rgba(255, 255, 255, 0.05)'}`,
}));

const FrontSide = styled(CardSide)(({ theme }) => ({
    transition: 'all 0.4s ease',
    '&:hover': {
        boxShadow: theme.palette.mode === 'light' ? '0px 15px 35px rgba(10, 31, 68, 0.12)' : '0px 15px 45px rgba(59, 130, 246, 0.2)',
        borderColor: theme.palette.primary.main,
        transform: 'translateY(-5px)',
    }
}));

const BackSide = styled(CardSide)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#0A1F44' : theme.palette.background.default,
    color: '#FFFFFF',
    transform: 'rotateX(180deg) rotateZ(-180deg)',
    transition: 'all 0.4s ease',
    border: theme.palette.mode === 'light' ? 'none' : `1px solid ${theme.palette.secondary.main}`,
    boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.2)',
    '&:hover': {
        boxShadow: theme.palette.mode === 'light' ? '0px 20px 45px rgba(10, 31, 68, 0.3)' : '0px 20px 45px rgba(249, 115, 22, 0.3)',
    }
}));

const SmartCard = ({ icon, title, desc, tag = "Profile" }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <CardContainer>
            <FlipperCard className="flipper-card">
                {/* Front Side */}
                <FrontSide>
                    <Box sx={{
                        color: 'secondary.main',
                        fontSize: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1
                    }}>
                        {/* The icon prop is passed here (e.g., 🌐, 📱) */}
                        <span style={{ filter: `drop-shadow(0 4px 6px ${isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(249, 115, 22, 0.15)'})` }}>
                            {icon}
                        </span>
                    </Box>

                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', px: 2, color: 'text.primary' }}>
                        {title}
                    </Typography>
                </FrontSide>

                {/* Back Side */}
                <BackSide>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 1, color: isDark ? 'secondary.main' : 'secondary.main' }}>
                        {title}
                    </Typography>

                    <Typography sx={{
                        fontSize: '14px',
                        color: isDark ? 'text.secondary' : 'rgba(255, 255, 255, 0.85)',
                        textAlign: 'center',
                        px: 3,
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        {desc}
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        fontSize: '32px',
                        color: isDark ? 'secondary.main' : '#FFFFFF',
                        filter: `drop-shadow(0 0 10px ${isDark ? 'rgba(249, 115, 22, 0.5)' : 'rgba(249, 115, 22, 0.5)'})`
                    }}>
                        {icon}
                    </Box>
                </BackSide>
            </FlipperCard>
        </CardContainer>
    );
};

export default SmartCard;
