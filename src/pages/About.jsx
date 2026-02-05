import { Box, Container, Grid, Typography, Stack, Divider, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import GlassCard, { CardAccent } from "../common/GlassCard";
import Heading from "../common/Heading";
import MuiButton from "../common/MuiButton";

// Icons for the pillars
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DiamondIcon from '@mui/icons-material/Diamond';

// Assets
import aboutHeroBg from "../assets/about_hero_bg.png";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const pillars = [
    {
      title: "VISION",
      desc: "To be the world's most trusted partner for digital innovation, recognized for our commitment to engineering excellence and client transformation.",
      icon: <VisibilityIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    },
    {
      title: "MISSION",
      desc: "To bridge the gap between complex business challenges and elegant technological solutions. We focus on results, not just features.",
      icon: <TrackChangesIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    },
    {
      title: "VALUES",
      desc: "Integrity, innovation, and client-centricity are at our core. We build lasting partnerships through transparency and consistent delivery.",
      icon: <DiamondIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box sx={{ pt: 8, bgcolor: 'background.default' }}>
      {/* Hero with Professional Background */}
      <Box sx={{
        py: { xs: 5, md: 8 },
        textAlign: "center",
        position: 'relative',
        backgroundImage: isDark
          ? `linear-gradient(rgba(5, 11, 24, 0.9), rgba(5, 11, 24, 0.8)), url(${aboutHeroBg})`
          : `linear-gradient(rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8)), url(${aboutHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Parallax effect
      }}>
        <Container maxWidth="lg">
          <Box data-aos="zoom-in" data-aos-duration="1500">
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "56px", md: "96px" }, fontWeight: 900, mb: 3, color: isDark ? 'text.primary' : 'primary.main', letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              Engineering Digital <Box component="span" sx={{ color: "secondary.main" }}>Legacies</Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", fontWeight: 500, lineHeight: 1.6, fontSize: { xs: '18px', md: '22px' } }}
            >
              At SmartCore Technologies, we combine strategic consulting with elite engineering to build software that moves the needle for your business.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 🏛️ PILLARS OF EXCELLENCE - FIXED TO STRAIGHT LINE */}
      <Box sx={{ py: 6, bgcolor: 'background.paper', borderY: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E5E7EB'}` }}>
        <Container maxWidth="xl">
          <Grid container spacing={0} justifyContent="center" alignItems="stretch" sx={{ width: '100%', mx: 'auto' }}>
            {pillars.map((pillar, i) => (
              <Grid size={4} key={i} sx={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
                <Box
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  sx={{
                    flex: 1,
                    px: { xs: 4, md: 4, lg: 8 },
                    py: 6,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Circular Icon Container */}
                  <Box sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 5,
                    boxShadow: isDark ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.05)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0'}`,
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.05)', borderColor: 'secondary.main' }
                  }}>
                    {pillar.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                      mb: 2,
                      letterSpacing: 2,
                      fontSize: { xs: '20px', md: '24px' }
                    }}
                  >
                    {pillar.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: '15.5px',
                      maxWidth: '300px'
                    }}
                  >
                    {pillar.desc}
                  </Typography>
                </Box>

                {/* Thin Vertical Divider (Desktop Only) */}
                {i < 2 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      position: 'absolute',
                      right: 0,
                      top: '15%',
                      bottom: '15%',
                      display: { xs: 'none', lg: 'block' },
                      borderColor: isDark ? 'rgba(255,255,255,0.05)' : '#E5E7EB',
                      borderWidth: '0.5px',
                      opacity: 0.8
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Professional Process Section */}
      <Box sx={{ bgcolor: "background.default", py: 6, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E2E8F0'}` }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up" sx={{ textAlign: 'center' }}>
            <Heading
              title={<>Enterprise <span>Workflow</span></>}
              subtitle="Our disciplined approach to building world-class software."
            />
          </Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 8, mx: 'auto', width: '100%' }}
          >
            {[
              { title: "Define", desc: "Strategy & Scope" },
              { title: "Design", desc: "Experience & Architecture" },
              { title: "Develop", desc: "Agile Implementation" },
              { title: "Debug", desc: "Quality Assurance" },
              { title: "Deploy", desc: "Launch & Optimize" },
            ].map((p, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={i} data-aos="fade-up" data-aos-delay={i * 100} sx={{ display: 'flex', justifyContent: 'center' }}>
                <GlassCard sx={{
                  p: 4,
                  flex: 1,
                  minWidth: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E2E8F0'}`,
                }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "72px",
                      fontWeight: 900,
                      color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(10, 31, 68, 0.08)",
                      position: 'absolute',
                      top: '10px',
                      lineHeight: 1,
                      zIndex: 0
                    }}
                  >
                    0{i + 1}
                  </Typography>
                  <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', pt: 4 }}>
                    <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 800, mb: 1.5 }}>{p.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500, lineHeight: 1.4 }}>{p.desc}</Typography>
                  </Box>
                  <CardAccent className="card-accent" />
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer CTA */}
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Box data-aos="fade-up">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: 'primary.main' }}>Ready to partner with us?</Typography>
          <MuiButton variant="contained" component={Link} to="/contact" sx={{ height: 56, px: 6 }}>Contact Us Today</MuiButton>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
