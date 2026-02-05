import { useState } from "react";
import { Box, Container, Grid, Typography, Stack, MenuItem, Select, TextField, useTheme } from "@mui/material";
import GlassCard from "../common/GlassCard";
import SmartCard from "../common/SmartCard";
import Heading from "../common/Heading";
import MuiButton from "../common/MuiButton";

const Services = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/service-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const serviceList = [
    { title: "Web Development", icon: "🌐", desc: "Build fast, scalable, and secure web applications tailored to your business needs." },
    { title: "Mobile Apps", icon: "📱", desc: "Crafting intuitive mobile experiences for iOS and Android that users truly love." },
    { title: "UI/UX Design", icon: "🎨", desc: "Merging stunning aesthetics with seamless functionality for maximum engagement." },
    { title: "AI/ML Solutions", icon: "🤖", desc: "Leverage the power of artificial intelligence to automate and optimize your workflows." },
    { title: "Digital Marketing", icon: "📈", desc: "Strategic marketing campaigns designed to scale your reach and conversion rates." },
    { title: "Cloud Services", icon: "☁️", desc: "Reliable and scalable cloud infrastructure for modern enterprise applications." },
  ];

  return (
    <Box sx={{ pt: 8, bgcolor: 'background.default' }}>
      {/* Hero */}
      <Box sx={{ py: 6, textAlign: "center", background: isDark ? 'background.default' : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up">
            <Heading
              title={<>Bespoke <span>Digital Services</span></>}
              subtitle="We provide high-end, scalable technology solutions for the modern enterprise, focusing on quality and innovation."
            />
          </Box>
        </Container>
      </Box>

      {/* Services Grid - 3 Cards per Row (Total 6 Cards) */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2} justifyContent="center">
          {serviceList.map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <Box sx={{ p: 1 }}>
                <SmartCard
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enquiry Form */}
      <Box sx={{ bgcolor: "background.default", py: 5, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E5E7EB'}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: isDark ? 'text.primary' : '#0B1E3C' }}>Scale Your <Box component="span" sx={{ color: 'secondary.main' }}>Digital Vision</Box></Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "18px", mb: 6, fontWeight: 400, lineHeight: 1.8 }}>
                  Our team of experts is ready to collaborate with you. Tell us about your project requirements today.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 800 }}>✓</Box>
                    <Typography sx={{ fontWeight: 700, color: isDark ? 'text.primary' : '#0B1E3C' }}>Elite Engineering Team</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 800 }}>✓</Box>
                    <Typography sx={{ fontWeight: 700, color: isDark ? 'text.primary' : '#0B1E3C' }}>Transparent Development Process</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 800 }}>✓</Box>
                    <Typography sx={{ fontWeight: 700, color: isDark ? 'text.primary' : '#0B1E3C' }}>Guaranteed Post-Launch Support</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <GlassCard sx={{ p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: 'none', textAlign: 'left', alignItems: 'flex-start' }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 3, width: '100%' }}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField fullWidth label="Your Name" name="name" required value={formData.name} onChange={handleChange} />
                    <TextField fullWidth label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField fullWidth label="Phone Number" name="phone" required value={formData.phone} onChange={handleChange} />
                    <TextField fullWidth label="Company (Optional)" name="company" value={formData.company} onChange={handleChange} />
                  </Stack>
                  <Select name="service" displayEmpty required value={formData.service} onChange={handleChange} sx={{ borderRadius: 2 }}>
                    <MenuItem value="" disabled>Inquiry Interest</MenuItem>
                    {serviceList.map((s) => (
                      <MenuItem key={s.title} value={s.title}>{s.title}</MenuItem>
                    ))}
                  </Select>
                  <TextField fullWidth multiline rows={4} label="Project Overview" name="message" value={formData.message} onChange={handleChange} />
                  <MuiButton type="submit" variant="contained" sx={{ py: 2.5, fontSize: '1.1rem' }}>
                    Request Proposal
                  </MuiButton>
                </Box>
              </GlassCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {showPopup && (
        <Box
          sx={{ position: "fixed", inset: 0, bgcolor: "rgba(0,0,0,0.6)", backdropFilter: 'blur(10px)', display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000 }}
          onClick={() => setShowPopup(false)}
        >
          <GlassCard sx={{ p: 6, textAlign: "center", maxWidth: "450px", mx: 2, border: 'none', bgcolor: 'background.paper' }} onClick={(e) => e.stopPropagation()}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800, color: isDark ? 'text.primary' : '#0B1E3C' }}>Enquiry Sent</Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, fontWeight: 500, lineHeight: 1.6 }}>
              Thank you for choosing SmartCore Technologies. Our consultants will contact you within 24 business hours.
            </Typography>
            <MuiButton variant="contained" onClick={() => setShowPopup(false)} sx={{ width: '100%' }}>Dismiss</MuiButton>
          </GlassCard>
        </Box>
      )}
    </Box>
  );
};

export default Services;
