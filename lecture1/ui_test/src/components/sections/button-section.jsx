import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

/**
 * ButtonSection 컴포넌트
 *
 * MUI Button의 variant와 color 조합을 보여주는 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <ButtonSection />
 */
function ButtonSection() {
  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

  const handleClick = (variant, color) => {
    alert(`${variant} / ${color} 버튼이 클릭되었습니다!`);
  };

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
        Button
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {variants.map((variant) => (
          <Box key={variant}>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1.5, color: 'text.secondary' }}
            >
              {variant}
            </Typography>
            <Grid container spacing={2}>
              {colors.map((color) => (
                <Grid key={color} size={{ xs: 12, sm: 4 }}>
                  <Button
                    variant={variant}
                    color={color}
                    fullWidth
                    onClick={() => handleClick(variant, color)}
                  >
                    {color}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ButtonSection;
