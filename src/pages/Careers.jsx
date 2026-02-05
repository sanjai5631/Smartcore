import { Box, Container, Grid, Typography, Stack, Chip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import GlassCard, { CardAccent } from "../common/GlassCard";
import Heading from "../common/Heading";
import MuiButton from "../common/MuiButton";

const Careers = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const jobs = [
    { title: "Web Developer Intern", type: "Full-Time", level: "Intern", icon: "🌐" },
    { title: "Digital Marketer Intern", type: "Full-Time", level: "Intern", icon: "📈" },
    { title: "Graphics Designer Intern", type: "Full-Time", level: "Intern", icon: "🎨" },
    { title: "UXUI Designer Intern", type: "Full-Time", level: "Intern", icon: "✨" },
    { title: "ML Engineer", type: "Full-Time", level: "Mid-Level", icon: "🤖" },
    { title: "Video Editor", type: "Part-Time", level: "Junior", icon: "🎬" },
  ];

  return (
    <Box sx={{ pt: 8, bgcolor: 'background.default' }}>
      {/* Hero */}
      <Box sx={{ py: 6, textAlign: "center", background: isDark ? 'background.default' : 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)' }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up">
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "52px", md: "88px" }, fontWeight: 900, mb: 3, color: isDark ? 'text.primary' : 'primary.main', letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              Join Our <Box component="span" sx={{ color: "secondary.main" }}>Vision</Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", fontWeight: 500, lineHeight: 1.6, fontSize: { xs: '18px', md: '22px' } }}
            >
              We're building the future of digital software. If you're passionate, creative, and ready to learn, we want you on our team.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Jobs Grid */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {jobs.map((job, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} data-aos="fade-up" data-aos-delay={i * 100} sx={{ display: 'flex' }}>
              <GlassCard sx={{
                flex: 1,
                p: 4,
                display: "flex",
                flexDirection: "column",
                bgcolor: 'background.paper',
                alignItems: 'flex-start',
                textAlign: 'left',
                height: '100%',
                border: isDark ? `1px solid rgba(255,255,255,0.05)` : '1px solid #E5E7EB',
              }}>
                <Box sx={{ display: "flex", width: '100%', justifyContent: "space-between", alignItems: "flex-start", mb: 4 }}>
                  <Box sx={{ width: 48, height: 48, bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,43,91,0.05)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                    {job.icon}
                  </Box>
                  <Chip label={job.level} size="small" sx={{ fontWeight: 800, bgcolor: 'rgba(255,106,0,0.1)', color: 'secondary.main', borderRadius: 1 }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: isDark ? 'text.primary' : 'primary.main', mb: 1, lineHeight: 1.2 }}>{job.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 4 }}>{job.type} • Remote</Typography>

                <Box sx={{ mt: "auto", width: '100%', pt: 2 }}>
                  <MuiButton
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    fullWidth
                    sx={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0', color: isDark ? 'text.primary' : 'primary.main', '&:hover': { borderColor: 'primary.main', bgcolor: 'transparent' } }}
                  >
                    Apply Now
                  </MuiButton>
                </Box>
                <CardAccent className="card-accent" />
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: "background.paper", py: 5, borderY: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E2E8F0'}` }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up">
            <Heading
              title={<>Why <span>SmartCore?</span></>}
              subtitle="We prioritize growth, culture, and high-quality engineering."
            />
          </Box>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            {[
              { title: "Growth & Learning", desc: "Access to elite mentorship and the latest educational resources in tech." },
              { title: "Global Projects", desc: "Work on high-impact projects for clients across multiple continents." },
              { title: "Flexible Culture", desc: "Results-oriented environment with a focus on work-life integration." },
            ].map((culture, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i} data-aos="zoom-in" data-aos-delay={i * 100} sx={{ display: 'flex' }}>
                <GlassCard sx={{ p: 5, flex: 1, bgcolor: isDark ? 'background.default' : '#FFFFFF', textAlign: 'center', height: '100%', border: isDark ? `1px solid rgba(255,255,255,0.05)` : '1px solid #E2E8F0' }}>
                  <Typography variant="h5" sx={{ color: isDark ? "text.primary" : "primary.main", fontWeight: 800, mb: 2 }}>{culture.title}</Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 500, lineHeight: 1.6 }}>{culture.desc}</Typography>
                  <CardAccent className="card-accent" />
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* General App */}
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Box data-aos="fade-up">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: isDark ? 'text.primary' : 'primary.main' }}>Don't see a fit?</Typography>
          <Typography variant="h6" sx={{ color: "text.secondary", mb: 6, fontWeight: 400 }}>We're always looking for outstanding talent. Send us your CV anyway.</Typography>
          <MuiButton variant="contained" component={Link} to="/contact" sx={{ height: 56, px: 8 }}>Send General Application</MuiButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;
