import { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Stack, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GlassCard, { CardAccent } from "../common/GlassCard";
import Heading from "../common/Heading";
import MuiButton from "../common/MuiButton";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Your message has been delivered to our engineering team." });
        setForm({ name: "", email: "", message: "" });
        setShowPopup(true);
      } else {
        setStatus({ type: "error", message: "Transmission failed. Please verify your details." });
        setShowPopup(true);
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network connection lost. Please try again later." });
      setShowPopup(true);
    }
  };

  const contactInfo = [
    { icon: "📍", title: "HQ Office", text: "Chennai, Tamil Nadu, India" },
    { icon: "✉️", title: "Inquiries", text: "support@smartcore.in", link: "mailto:support@smartcore.in" },
    { icon: "📞", title: "Business Call", text: "+91 90801 56420", link: "tel:+919080156420" },
    { icon: <WhatsAppIcon sx={{ fontSize: '28px' }} />, title: "WhatsApp", text: "Chat with us", link: "https://wa.me/919080156420" },
  ];

  return (
    <Box sx={{ pt: 8, minHeight: "100vh", bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={8} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "52px", md: "88px" },
                  fontWeight: 900,
                  mb: 3,
                  color: isDark ? 'text.primary' : 'primary.main',
                  letterSpacing: '-0.05em',
                  lineHeight: 0.95
                }}
              >
                Let's Build <br />
                <Box component="span" sx={{ color: "secondary.main" }}>The Future.</Box>
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", mb: 8, maxWidth: "500px", lineHeight: 1.8, fontWeight: 500, fontSize: { xs: '18px', md: '20px' } }}>
                Reach out to discuss your next big idea. We're here to provide the technical expertise you need to succeed.
              </Typography>

              <Stack spacing={5}>
                {contactInfo.map((info, i) => (
                  <Stack key={i} direction="row" spacing={3} alignItems="flex-start" data-aos="fade-up" data-aos-delay={i * 100}>
                    <Box sx={{ width: 52, height: 52, bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 43, 91, 0.05)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: isDark ? "text.primary" : "primary.main", flexShrink: 0 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5, mb: 0.5, fontSize: '11px' }}>{info.title}</Typography>
                      {info.link ? (
                        <Typography component="a" href={info.link} sx={{ color: isDark ? "text.primary" : "primary.main", fontWeight: 700, textDecoration: "none", fontSize: '18px', transition: '0.3s', "&:hover": { color: "secondary.main" } }}>{info.text}</Typography>
                      ) : (
                        <Typography sx={{ color: isDark ? "text.primary" : "primary.main", fontWeight: 700, fontSize: '18px' }}>{info.text}</Typography>
                      )}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
            <GlassCard sx={{
              padding: 0,
              backgroundColor: 'background.paper',
              borderRadius: '40px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9'}`,
              boxShadow: isDark ? '0 40px 120px rgba(0,0,0,0.4)' : '0 40px 120px -20px rgba(0,43,91,0.08)',
              height: '100%'
            }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ p: { xs: 4, md: 8 }, display: "grid", gap: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, color: isDark ? 'text.primary' : 'primary.main', mb: 1, textAlign: 'left', letterSpacing: '-1px' }}>Project Brief</Typography>
                <TextField
                  fullWidth
                  label="Full Name *"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
                <TextField
                  fullWidth
                  label="Email Address *"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="How can we help? *"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
                <MuiButton type="submit" variant="contained" sx={{ py: 2.2, fontSize: '1.1rem', borderRadius: '12px', fontWeight: 700 }}>
                  Send Message
                </MuiButton>
              </Box>
              <CardAccent className="card-accent" />
            </GlassCard>
          </Grid>
        </Grid>
      </Container>

      {/* Collaboration Process Section */}
      <Box sx={{ py: 8, bgcolor: isDark ? 'background.paper' : '#F1F5F9', borderY: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E2E8F0'}` }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 6 }}>
            <Heading
              title={<>Our <span>Engagement</span> Process</>}
              subtitle="How we involve you in every step of the development journey."
            />
          </Box>
          <Grid container spacing={3}>
            {[
              { step: "01", title: "Strategic Inquiry", desc: "We dive deep into your business objectives to align our tech stack with your vision.", icon: "🔍" },
              { step: "02", title: "Custom Blueprint", desc: "Collaborative architecting of scalable, high-performance digital solutions.", icon: "📐" },
              { step: "03", title: "Precision Build", desc: "Agile engineering cycles with transparent involvements and rapid deployments.", icon: "⚙️" }
            ].map((p, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <GlassCard sx={{ p: 5, textAlign: 'left', bgcolor: isDark ? 'background.default' : '#FFFFFF', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'transparent'}`, position: 'relative' }}>
                  <Typography variant="h1" sx={{ fontSize: '60px', fontWeight: 900, color: 'secondary.main', opacity: 0.1, position: 'absolute', top: 10, right: 30, lineHeight: 1 }}>
                    {p.step}
                  </Typography>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'rgba(249, 115, 22, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', mb: 3 }}>
                    {p.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: isDark ? 'text.primary' : 'primary.main', mb: 1.5 }}>{p.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontWeight: 500 }}>{p.desc}</Typography>
                  <CardAccent className="card-accent" />
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Premium Map Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 3, fontSize: '14px', mb: 2 }}>
            Visit Our Studio
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: isDark ? 'text.primary' : 'primary.main' }}>
            Find Us on the <Box component="span" sx={{ color: 'secondary.main' }}>Map</Box>
          </Typography>
        </Box>
        <Box data-aos="zoom-in" sx={{
          position: 'relative',
          borderRadius: '44px',
          overflow: 'hidden',
          height: { xs: '600px', md: '550px' },
          boxShadow: isDark ? '0 0 60px rgba(59, 130, 246, 0.2)' : '0 50px 100px -20px rgba(10, 31, 68, 0.18)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB'}`,
          background: 'background.paper'
        }}>
          {/* Subtle Gradient Overlay for Depth */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(to right, rgba(5, 11, 24, 0.8) 0%, rgba(5, 11, 24, 0) 50%)'
              : 'linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 50%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124403.22051664052!2d80.12920251785233!3d12.9152345639103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526689d71f661d%3A0xc3f8376510619808!2sSmart%20Ideal%20Technologies!5e0!3m2!1sen!2sin!4v1710185000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: isDark
                ? 'invert(90%) hue-rotate(180deg) grayscale(0.4) contrast(1.2) brightness(0.9)'
                : 'grayscale(0.2) contrast(1.1) brightness(1)',
              transition: 'filter 0.5s ease'
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Pulsing Location Marker Overlay (Visual Only) */}
          <Box sx={{
            position: 'absolute',
            top: '45%',
            left: '60%',
            zIndex: 5,
            pointerEvents: 'none',
            display: { xs: 'none', md: 'block' }
          }}>
            <Box sx={{
              width: 20,
              height: 20,
              bgcolor: 'secondary.main',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.8)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                borderRadius: '50%',
                border: '2px solid',
                borderColor: 'secondary.main',
                animation: 'pulse 2s infinite ease-out',
                opacity: 0,
              },
              '@keyframes pulse': {
                '0%': { transform: 'scale(0.5)', opacity: 0.8 },
                '100%': { transform: 'scale(2.5)', opacity: 0 }
              }
            }} />
          </Box>

          <Box sx={{
            position: 'absolute',
            top: { xs: 'auto', md: 50 },
            bottom: { xs: 30, md: 'auto' },
            left: { xs: 20, md: 50 },
            right: { xs: 20, md: 'auto' },
            maxWidth: '380px',
            zIndex: 10
          }}>
            <GlassCard sx={{
              p: { xs: 4, md: 5 },
              bgcolor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(30px) saturate(150%)',
              textAlign: 'left',
              alignItems: 'flex-start',
              borderRadius: '32px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(10, 31, 68, 0.08)'}`,
              boxShadow: isDark ? '0 25px 50px rgba(0,0,0,0.5)' : '0 25px 50px rgba(10, 31, 68, 0.1)',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                borderColor: 'secondary.main'
              }
            }}>
              <Box sx={{
                mb: 3,
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(249, 115, 22, 0.1)',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                  Our Location
                </Typography>
              </Box>

              <Typography variant="h4" sx={{
                fontWeight: 900,
                color: isDark ? 'text.primary' : 'primary.main',
                mb: 2,
                fontSize: { xs: '24px', md: '32px' },
                lineHeight: 1.1
              }}>
                Global <br /> Headquarters
              </Typography>

              <Typography variant="body1" sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 500,
                lineHeight: 1.7,
                fontSize: '15px'
              }}>
                SmartCore Technologies <br />
                Chennai, Tamil Nadu 600001 <br />
                India
              </Typography>

              <MuiButton
                variant="contained"
                size="large"
                component="a"
                href="https://maps.app.goo.gl/9uE8W1p9mXJ5P1Jj7"
                target="_blank"
                fullWidth
                sx={{
                  borderRadius: '16px',
                  py: 1.8,
                  fontSize: '15px',
                  fontWeight: 800,
                  boxShadow: '0 10px 25px rgba(249, 115, 22, 0.3)',
                  background: 'linear-gradient(135deg, #FB6A00 0%, #F97316 100%)',
                  '&:hover': {
                    boxShadow: '0 15px 30px rgba(249, 115, 22, 0.4)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Get Directions
              </MuiButton>
            </GlassCard>
          </Box>
        </Box>
      </Container>



      {/* Popup */}
      {showPopup && (
        <Box sx={{ position: "fixed", inset: 0, bgcolor: "rgba(0,0,0,0.5)", backdropFilter: 'blur(8px)', display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000 }} onClick={() => setShowPopup(false)}>
          <Box sx={{ animation: 'zoomIn 0.3s ease-out' }}>
            <GlassCard sx={{ p: 6, textAlign: "center", maxWidth: "450px", mx: 2, border: 'none', bgcolor: 'background.paper' }} onClick={(e) => e.stopPropagation()}>
              <Typography variant="h4" sx={{ mb: 2, color: status.type === 'success' ? (isDark ? 'secondary.main' : "primary.main") : "error.main", fontWeight: 800 }}>
                {status.type === 'success' ? 'Transmission Successful' : 'Error'}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 4, fontSize: "16px", fontWeight: 500, lineHeight: 1.6 }}>{status.message}</Typography>
              <MuiButton variant="contained" onClick={() => setShowPopup(false)} sx={{ width: '100%' }}>Close</MuiButton>
            </GlassCard>
          </Box>
        </Box>
      )}
    </Box>
  );
}; export default Contact;
