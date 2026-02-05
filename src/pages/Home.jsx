import { useState } from "react";
import { Box, Container, Typography, Grid, Stack, Divider, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import GlassCard, { CardAccent } from "../common/GlassCard";
import Heading from "../common/Heading";
import MuiButton from "../common/MuiButton";
import SmartCard from "../common/SmartCard";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Assets
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import faqIllustration from "../assets/faq_illustration.png";

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const heroSlides = [
    {
      title: <>Design. Build. <br /><Box component="span" sx={{
        background: 'linear-gradient(90deg, #FB6A00, #F97316)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>Scale Faster.</Box></>,
      subtitle: "We partner with ambitious brands to create high-performance digital products that drive measurable business results.",
      image: hero1,
      tag: "Digital Innovation Studio"
    },
    {
      title: <>Future-Proof <br /><Box component="span" sx={{
        background: 'linear-gradient(90deg, #FB6A00, #F97316)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>Engineering.</Box></>,
      subtitle: "Our elite global team delivers scalable enterprise solutions using cutting-edge technologies and disciplined workflows.",
      image: hero2,
      tag: "Enterprise Solutions"
    },
    {
      title: <>Modernize Your <br /><Box component="span" sx={{
        background: 'linear-gradient(90deg, #FB6A00, #F97316)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>Digital Vision.</Box></>,
      subtitle: "From legacy transformations to AI-driven automation, we navigate your digital evolution with precision.",
      image: hero3,
      tag: "Transformation Partners"
    }
  ];

  const stats = [
    { num: "100+", label: "Projects Completed", icon: "🚀", color: "#E0F2FE" },
    { num: "50+", label: "Active Clients", icon: "🤝", color: "#F0FDFA" },
    { num: "5+", label: "Years Experience", icon: "📅", color: "#FEF3C7" },
    { num: "24/7", label: "Client Support", icon: "📞", color: "#FEE2E2" },
    { num: "100%", label: "Client Satisfaction", icon: "⭐", color: "#F3E8FF" },
    { num: "50+", label: "Expert Techies", icon: "👨‍💻", color: "#DCFCE7" },
  ];

  const services = [
    { title: "Web Development", desc: "Enterprise-grade web applications built with speed and security.", icon: "🌐" },
    { title: "Mobile Apps", desc: "Native and cross-platform mobile experiences that users love.", icon: "📱" },
    { title: "UI/UX Design", desc: "User-centric designs that are both beautiful and functional.", icon: "🎨" },
    { title: "AI & ML", desc: "Integrating intelligent features to automate and optimize.", icon: "🤖" },
    { title: "Digital Marketing", desc: "Growing your online presence and reaching the right audience.", icon: "📈" },
    { title: "Cloud Solutions", desc: "Scalable and reliable cloud infrastructure for your apps.", icon: "☁️" },
  ];

  const faqData = [
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Yes, we provide ongoing post-launch support and maintenance to ensure your website remains secure, updated, and performs optimally.",
    },
    {
      q: "Can you redesign my existing website or app?",
      a: "Absolutely! We modernize outdated websites and apps with improved UI/UX and performance.",
    },
    {
      q: "What technologies do you use?",
      a: "We work with React, Node.js, MongoDB, Express, and modern stacks including AI integration.",
    },
    {
      q: "Do you offer custom website designs?",
      a: "Yes, we create fully custom, responsive website designs tailored to your brand.",
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 8 }}>
      {/* Hero Carousel - RIGOROUS AUTOPLAY FIX */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '450px', sm: '550px', md: '70vh' }, overflow: 'hidden' }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1200}
          watchSlidesProgress={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          navigation={false}
          style={{ width: '100%', height: '100%' }}
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  background: isDark
                    ? `linear-gradient(90deg, ${theme.palette.background.default} 30%, rgba(5, 11, 24, 0.7) 100%), url(${slide.image})`
                    : `linear-gradient(90deg, #FFFFFF 30%, rgba(255, 255, 255, 0.7) 100%), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid size={{ xs: 12, md: 7 }}>
                      <Box data-aos="fade-right">
                        <Box sx={{ mb: 3, display: 'inline-block', px: 2, py: 0.5, bgcolor: 'rgba(10, 31, 68, 0.05)', borderRadius: 50 }}>
                          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                            {slide.tag}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h1"
                          sx={{
                            fontSize: { xs: '44px', md: '78px' },
                            fontWeight: 900,
                            mb: 3,
                            color: isDark ? 'text.primary' : '#0B1E3C', // Navy Dark
                            lineHeight: 1.05,
                            letterSpacing: '-0.04em'
                          }}
                        >
                          {slide.title}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: isDark ? 'text.secondary' : '#6B7280',
                            mb: 6,
                            maxWidth: '600px',
                            fontSize: { xs: '18px', md: '20px' },
                            lineHeight: 1.6,
                            fontWeight: 400
                          }}
                        >
                          {slide.subtitle}
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <MuiButton variant="contained" component={Link} to="/contact" sx={{ height: 60, px: 6, fontSize: '18px' }}>
                            Start Your Project
                          </MuiButton>
                          <MuiButton variant="outlined" component={Link} to="/services" sx={{ height: 60, px: 6, fontSize: '18px' }}>
                            View Our Work
                          </MuiButton>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Stats Section - AUTO MOVE ENABLED */}
      <Box sx={{ width: '100%', py: 6, bgcolor: 'background.paper', borderY: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E2E8F0'}` }}>
        <Container maxWidth="lg">
          <Box data-aos="fade-up">
            <Swiper
              spaceBetween={30}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              grabCursor={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              style={{ paddingBottom: '60px' }}
            >
              {stats.map((stat, i) => (
                <SwiperSlide key={i} style={{ height: 'auto', display: 'flex', padding: '10px' }}>
                  <GlassCard
                    sx={{
                      textAlign: 'center',
                      py: 6,
                      px: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: isDark ? 'rgba(255,255,255,0.05)' : stat.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '36px',
                        mb: 3
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 1, fontSize: '40px', letterSpacing: '-0.02em' }}>
                      {stat.num}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        fontSize: '11px'
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <CardAccent className="card-accent" />
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Container sx={{ py: 6 }}>
        <Box data-aos="fade-up">
          <Heading
            title={<>Our <span>Core Expertise</span></>}
            subtitle="Precision engineering combined with world-class design for digital products that win."
          />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {[{
            title: "Web Development",
            desc: "Enterprise-grade web applications built with speed and security.",
            icon: "🌐"
          }, {
            title: "Mobile Apps",
            desc: "Native and cross-platform mobile experiences that users love.",
            icon: "📱"
          }, {
            title: "UI/UX Design",
            desc: "User-centric designs that are both beautiful and functional.",
            icon: "🎨"
          }, {
            title: "AI & ML",
            desc: "Integrating intelligent features to automate and optimize.",
            icon: "🤖"
          }, {
            title: "Digital Marketing",
            desc: "Growing your online presence and reaching the right audience.",
            icon: "📈"
          }, {
            title: "Cloud Solutions",
            desc: "Scalable and reliable cloud infrastructure for your apps.",
            icon: "☁️"
          }].map((s, i) => (
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


      {/* High-End CTA */}
      <Box sx={{ py: 6, bgcolor: isDark ? 'background.paper' : '#0A1F44', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', color: 'white', position: 'relative', zIndex: 2 }}>
          <Box data-aos="zoom-in">
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 800, color: 'white', fontSize: { xs: '36px', md: '56px' } }}>
              Build Something <Box component="span" sx={{ color: 'secondary.main' }}>Extraordinary</Box>
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, color: 'rgba(255, 255, 255, 0.7)', fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              We're ready to help you navigate your digital transformation journey with expert advice and execution.
            </Typography>
            <MuiButton variant="contained" color="secondary" component={Link} to="/contact" sx={{ px: 8, height: 60, fontSize: '18px' }}>
              Get Started Now
            </MuiButton>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section - RIGID 2-COLUMN FLEXBOX */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 4, md: 6 }
          }}
        >
          {/* Left Side: Questions */}
          <Box sx={{ width: { xs: '100%', md: '62%' }, dataAos: "fade-right" }}>
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                fontWeight: 900,
                mb: 3,
                textAlign: 'left',
                fontSize: { xs: '32px', md: '48px' },
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}
            >
              FAQ <Box component="span" sx={{ color: 'secondary.main' }}>& Support</Box>
            </Typography>

            <Stack spacing={1}>
              {[
                { q: "Do you offer post-launch support and maintenance?", a: "Yes, we provide ongoing post-launch support and maintenance to ensure your website remains secure, updated, and performs optimally." },
                { q: "Can you redesign my existing website or app?", a: "Absolutely! We modernize outdated websites and apps with improved UI/UX and higher performance standards." },
                { q: "What technologies do you use?", a: "We specialize in React, Node.js, MongoDB, Express, and high-end cloud infra like AWS/Azure." },
                { q: "Do you offer custom website designs?", a: "Yes, every pixel is handcrafted to align with your brand identity and business objectives." },
                { q: "How long does it take to develop a mobile app?", a: "A typical MVP takes 8-12 weeks, while complex enterprise apps can take 4-6 months depending on requirements." },
                { q: "What industries do you work with?", a: "We work across Fintech, Healthcare, E-commerce, Logistics, and rapidly scaling SaaS startups." }
              ].map((f, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'relative',
                    bgcolor: 'background.paper',
                    borderRadius: '12px 12px 12px 12px',
                    transition: 'all 0.4s ease',
                    boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.3)' : '0 10px 30px -15px rgba(0,0,0,0.1)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#E5E7EB'}`,
                    '&:hover': {
                      boxShadow: isDark ? '0 15px 45px rgba(59, 130, 246, 0.2)' : '0 15px 35px -12px rgba(249, 115, 22, 0.15)',
                      borderColor: 'secondary.main'
                    }
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 1, md: 1.5 },
                      pr: { xs: 1.5, md: 2.5 },
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      userSelect: 'none'
                    }}
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  >
                    {/* Number Badge */}
                    <Box sx={{
                      width: 45,
                      height: 45,
                      minWidth: 45,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '16px',
                      boxShadow: '0 4px 10px rgba(249, 115, 22, 0.3)',
                      background: 'linear-gradient(135deg, #FB6A00 0%, #F97316 100%)'
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: '15px',
                        flex: 1
                      }}
                    >
                      {f.q}
                    </Typography>

                    <Box sx={{
                      color: '#94A3B8',
                      transition: 'transform 0.3s ease',
                      transform: openFAQ === i ? 'rotate(180deg)' : 'none',
                      display: 'flex'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </Box>
                  </Box>

                  {/* Animated Answer Section */}
                  <Box sx={{
                    maxHeight: openFAQ === i ? '500px' : '0px',
                    opacity: openFAQ === i ? 1 : 0,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    px: { xs: 2, md: 8.5 },
                    pb: openFAQ === i ? 2 : 0,
                    overflow: 'hidden'
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      {f.a}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>


          {/* Right Side: Illustration & Contact */}
          <Box
            sx={{
              width: { xs: '100%', md: '33%' },
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: { xs: 0, md: 9 } // Aligns illustration with the questions
            }}
            data-aos="fade-left"
          >
            <Box
              component="img"
              src={faqIllustration}
              sx={{
                width: '100%',
                maxWidth: '220px',
                mb: 3,
              }}
              alt="FAQ Illustration"
            />

            <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: '30px' }}>
              Still Have a <Box component="span" sx={{ color: 'secondary.main' }}>Question</Box>?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontWeight: 500, fontSize: '16px' }}>
              Can't find the answer you're looking for?
            </Typography>

            <MuiButton
              variant="outlined"
              component={Link}
              to="/contact"
              sx={{
                borderRadius: '100px',
                px: 5,
                py: 1.5,
                borderColor: 'secondary.main',
                color: 'primary.main',
                fontSize: '15px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'white',
                  borderColor: 'secondary.main',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              📞 Contact Us
            </MuiButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
