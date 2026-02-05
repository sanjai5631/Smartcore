import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
    palette: {
        mode,
        primary: {
            main: mode === 'light' ? '#0A1F44' : '#3B82F6', // Brighter blue in dark mode
            contrastText: '#fff',
        },
        secondary: {
            main: '#F97316', // Orange
        },
        background: {
            default: mode === 'light' ? '#FFFFFF' : '#050B18',
            paper: mode === 'light' ? '#FFFFFF' : '#0F172A',
        },
        text: {
            primary: mode === 'light' ? '#1F2937' : '#F8FAFC',
            secondary: mode === 'light' ? '#6B7280' : '#94A3B8',
        },
    },
    typography: {
        fontFamily: "'Outfit', sans-serif",
        h1: {
            fontWeight: 900,
            color: mode === 'light' ? '#0B1E3C' : '#F8FAFC',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
        },
        h2: {
            fontWeight: 800,
            color: mode === 'light' ? '#0B1E3C' : '#F8FAFC',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 800,
            color: mode === 'light' ? '#0B1E3C' : '#F8FAFC',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
        },
        h4: {
            fontWeight: 800,
            color: mode === 'light' ? '#0B1E3C' : '#F8FAFC',
        },
        h5: {
            fontWeight: 700,
            color: mode === 'light' ? '#0B1E3C' : '#F8FAFC',
        },
        body1: {
            fontWeight: 500,
            lineHeight: 1.7,
        },
        body2: {
            fontWeight: 500,
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '12px 28px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                },
                containedPrimary: {
                    backgroundColor: mode === 'light' ? '#0A1F44' : '#3B82F6',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: mode === 'light' ? '#09172F' : '#2563EB',
                        boxShadow: mode === 'light'
                            ? '0 8px 20px rgba(10, 31, 68, 0.15)'
                            : '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
                        transform: mode === 'dark' ? 'translateY(-2px)' : 'none',
                    },
                },
                outlinedPrimary: {
                    borderColor: mode === 'light' ? '#0A1F44' : '#3B82F6',
                    color: mode === 'light' ? '#0A1F44' : '#3B82F6',
                    '&:hover': {
                        backgroundColor: mode === 'light' ? '#F8FAFC' : 'rgba(59, 130, 246, 0.05)',
                        borderColor: mode === 'light' ? '#0A1F44' : '#3B82F6',
                        boxShadow: mode === 'dark' ? '0 0 15px rgba(59, 130, 246, 0.2)' : 'none',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#F97316',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#EA580C',
                        boxShadow: mode === 'light'
                            ? '0 8px 20px rgba(249, 115, 22, 0.15)'
                            : '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.2)',
                        transform: mode === 'dark' ? 'translateY(-2px)' : 'none',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    boxShadow: mode === 'light'
                        ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                        : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                    border: mode === 'light' ? '1px solid #E5E7EB' : '1px solid rgba(255, 255, 255, 0.05)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        backgroundColor: mode === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.05)',
                        '& fieldset': {
                            borderColor: mode === 'light' ? '#E5E7EB' : 'rgba(255, 255, 255, 0.1)',
                        },
                    },
                },
            },
        },
    },
});

export default getTheme;
