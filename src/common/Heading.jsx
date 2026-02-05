import { Typography, Box, useTheme } from '@mui/material';

const Heading = ({ title, subtitle, align = 'center', color, mb = 4 }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box sx={{ mb: mb, textAlign: align }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontSize: { xs: '36px', md: '64px' },
                    fontWeight: 900,
                    mb: 2,
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    color: color || (isDark ? 'text.primary' : 'primary.main'),
                    '& span': {
                        color: 'secondary.main' // Keeping orange as the span accent
                    }
                }}
            >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        maxWidth: '700px',
                        mx: align === 'center' ? 'auto' : 0,
                        fontSize: '18px',
                        fontWeight: 500
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default Heading;
