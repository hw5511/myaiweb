import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

/**
 * InputSection 컴포넌트
 *
 * MUI TextField의 variant별 입력 필드와 실시간 입력값 표시 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <InputSection />
 */
function InputSection() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: ''
  });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  const variants = [
    { name: 'standard', label: 'Standard 입력', placeholder: 'Standard 텍스트를 입력하세요' },
    { name: 'outlined', label: 'Outlined 입력', placeholder: 'Outlined 텍스트를 입력하세요' },
    { name: 'filled', label: 'Filled 입력', placeholder: 'Filled 텍스트를 입력하세요' }
  ];

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
        Input
      </Typography>

      <Grid container spacing={3}>
        {variants.map(({ name, label, placeholder }) => (
          <Grid key={name} size={{ xs: 12, md: 4 }}>
            <TextField
              variant={name}
              label={label}
              placeholder={placeholder}
              value={values[name]}
              onChange={handleChange(name)}
              fullWidth
            />
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: 'text.secondary',
                minHeight: '1.5em',
                wordBreak: 'break-all'
              }}
            >
              {values[name] ? `입력값: ${values[name]}` : '입력 대기 중...'}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InputSection;
