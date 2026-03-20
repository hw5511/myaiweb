import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const hoverCards = [
  {
    title: '색상 변화',
    description: '배경색이 부드럽게 변합니다',
    sx: {
      bgcolor: 'grey.100',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        bgcolor: 'primary.main',
        color: 'primary.contrastText'
      }
    }
  },
  {
    title: '크기 변화',
    description: '카드가 살짝 커집니다',
    sx: {
      bgcolor: 'grey.100',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }
  },
  {
    title: '그림자 효과',
    description: '그림자가 깊어집니다',
    sx: {
      bgcolor: 'grey.100',
      boxShadow: 1,
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: 10
      }
    }
  },
  {
    title: '테두리 효과',
    description: '테두리 색상이 변합니다',
    sx: {
      bgcolor: 'grey.100',
      border: 2,
      borderColor: 'transparent',
      transition: 'border-color 0.3s ease',
      '&:hover': {
        borderColor: 'secondary.main'
      }
    }
  },
  {
    title: '회전 효과',
    description: '카드가 살짝 기울어집니다',
    sx: {
      bgcolor: 'grey.100',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'rotate(-3deg)'
      }
    }
  },
  {
    title: '복합 효과',
    description: '여러 효과가 동시에 적용됩니다',
    sx: {
      bgcolor: 'grey.100',
      transition: 'all 0.3s ease',
      '&:hover': {
        bgcolor: 'error.main',
        color: 'error.contrastText',
        transform: 'scale(1.05) translateY(-4px)',
        boxShadow: 8
      }
    }
  }
];

/**
 * HoverSection 컴포넌트
 *
 * 다양한 CSS 호버 효과를 카드 형태로 보여주는 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <HoverSection />
 */
function HoverSection() {
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
        Hover
      </Typography>

      <Grid container spacing={2}>
        {hoverCards.map(({ title, description, sx }) => (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                ...sx
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HoverSection;
