import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { keyframes } from '@mui/material/styles';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
`;

/**
 * AnimationSection 컴포넌트
 *
 * MUI 트랜지션(Fade, Grow, Slide)과 CSS keyframes 애니메이션 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <AnimationSection />
 */
function AnimationSection() {
  const [showFade, setShowFade] = useState(true);
  const [showGrow, setShowGrow] = useState(true);
  const [showSlide, setShowSlide] = useState(true);

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.4rem', md: '1.6rem' },
          mb: 3
        }}
      >
        Animation
      </Typography>

      {/* MUI 트랜지션 */}
      <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.secondary' }}>
        MUI Transitions
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setShowFade((prev) => !prev)}
            sx={{ mb: 1.5 }}
          >
            Fade 토글
          </Button>
          <Box sx={{ minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Fade in={showFade} timeout={600}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                Fade 효과
              </Paper>
            </Fade>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setShowGrow((prev) => !prev)}
            sx={{ mb: 1.5 }}
          >
            Grow 토글
          </Button>
          <Box sx={{ minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grow in={showGrow} timeout={600}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>
                Grow 효과
              </Paper>
            </Grow>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setShowSlide((prev) => !prev)}
            sx={{ mb: 1.5 }}
          >
            Slide 토글
          </Button>
          <Box sx={{ minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Slide direction="up" in={showSlide} timeout={600} mountOnEnter unmountOnExit>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'error.main', color: 'error.contrastText' }}>
                Slide 효과
              </Paper>
            </Slide>
          </Box>
        </Grid>
      </Grid>

      {/* CSS Keyframes 애니메이션 */}
      <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.secondary' }}>
        CSS Keyframes
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box sx={{
            p: 2,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            animation: `${bounce} 1.5s ease-in-out infinite`
          }}>
            Bounce
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box sx={{
            p: 2,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            animation: `${spin} 3s linear infinite`
          }}>
            Spin
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box sx={{
            p: 2,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'error.main',
            color: 'error.contrastText',
            animation: `${pulse} 2s ease-in-out infinite`
          }}>
            Pulse
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnimationSection;
