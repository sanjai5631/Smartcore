import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack, Divider, useTheme } from "@mui/material";
import logo from "../assets/smart ideal logo 4.png";
import googleIcon from "../assets/icons8-google-50.png";
import { IconButton, TextField } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box component="footer" sx={{
      bgcolor: isDark ? 'background.default' : "#FFFFFF",
      color: "text.primary",
      pt: 8,
      pb: 4,
      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E5E7EB'}`
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ maxWidth: 350 }}>
              <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", mb: 3 }}>
                <Box component="img" src={logo} alt="SmartCore" sx={{ height: 38 }} />
                <Typography variant="h5" sx={{ fontWeight: 900, color: "text.primary", letterSpacing: '-0.5px', fontSize: '22px' }}>
                  SMART<Box component="span" sx={{ color: "secondary.main" }}>CORE</Box>
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 4, fontSize: '14px', fontWeight: 500 }}>
                Delivering high-performance digital solutions through strategic engineering and user-centric design. We build the future, one project at a time.
              </Typography>

              <Box sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "background.paper",
                px: 2.5,
                py: 1,
                borderRadius: '100px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB'}`,
                mb: 4
              }}>
                <Box component="img" src={googleIcon} alt="Google" sx={{ width: 20 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, color: 'text.primary', fontSize: '12px', lineHeight: 1 }}>5.0 RATING</Typography>
                  <Typography sx={{ color: "#FFD200", letterSpacing: 1, fontSize: '10px' }}>★★★★★</Typography>
                </Box>
              </Box>

              <Stack direction="row" spacing={1.5}>
                {[
                  { icon: <LinkedInIcon />, url: "#" },
                  { icon: <TwitterIcon />, url: "#" },
                  { icon: <InstagramIcon />, url: "#" }
                ].map((social, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9',
                      color: 'text.primary',
                      '&:hover': {
                        bgcolor: 'secondary.main',
                        color: 'white',
                        transform: 'translateY(-3px)',
                        boxShadow: isDark ? '0 0 15px rgba(249, 115, 22, 0.4)' : 'none'
                      },
                      transition: '0.3s'
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: '12px' }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["About Us", "Careers", "Services", "Contact"].map((item) => (
                <Typography key={item} component={Link} to={`/${item.toLowerCase().replace(" ", "")}`} sx={{ color: "text.secondary", textDecoration: "none", fontWeight: 600, fontSize: '14px', "&:hover": { color: "secondary.main" }, transition: "0.2s" }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: '12px' }}>
              Solutions
            </Typography>
            <Stack spacing={1.5}>
              {["Web Design", "Mobile Apps", "AI Systems", "Cloud Dev"].map((item) => (
                <Typography key={item} component={Link} to="/services" sx={{ color: "text.secondary", textDecoration: "none", fontWeight: 600, fontSize: '14px', "&:hover": { color: "secondary.main" }, transition: "0.2s" }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1, fontSize: '12px' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, fontWeight: 500 }}>
              Subscribe to stay updated with the latest digital trends and our newest projects.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                placeholder="Email Address"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    bgcolor: 'background.paper',
                    '& fieldset': { borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB' }
                  }
                }}
              />
              <IconButton
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'secondary.main',
                    boxShadow: isDark ? '0 0 15px rgba(249, 115, 22, 0.4)' : 'none'
                  }
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>

            <Stack spacing={2} sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, minWidth: 70 }}>LOCATION</Typography>
                <Typography sx={{ color: "text.primary", fontWeight: 700, fontSize: '14px' }}>📍 Chennai, IN</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, minWidth: 70 }}>EMAIL</Typography>
                <Typography component="a" href="mailto:support@smartcore.in" sx={{ color: "text.primary", fontWeight: 700, textDecoration: "none", fontSize: '14px', "&:hover": { color: 'secondary.main' } }}>
                  support@smartcore.in
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 5, opacity: isDark ? 0.05 : 0.6 }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={3} sx={{ color: "text.secondary", fontSize: "13px", fontWeight: 600 }}>
          <Typography>© {new Date().getFullYear()} SmartCore Technologies. All rights reserved.</Typography>
          <Stack direction="row" spacing={4}>
            <Typography component="a" href="#" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "secondary.main" } }}>Privacy Policy</Typography>
            <Typography component="a" href="#" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "secondary.main" } }}>Terms</Typography>
            <Typography component="a" href="#" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "secondary.main" } }}>Sitemap</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
