import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const categories = [
  { label: '프로그래밍 언어', options: ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust'] },
  { label: '프레임워크', options: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt'] },
  { label: '데이터베이스', options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase'] }
];

/**
 * DropdownSection 컴포넌트
 *
 * MUI Select 기반 드롭다운 메뉴와 선택값 실시간 표시 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <DropdownSection />
 */
function DropdownSection() {
  const [values, setValues] = useState({
    '프로그래밍 언어': '',
    '프레임워크': '',
    '데이터베이스': ''
  });

  const handleChange = (label) => (e) => {
    setValues((prev) => ({ ...prev, [label]: e.target.value }));
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
        Dropdown
      </Typography>

      <Grid container spacing={3}>
        {categories.map(({ label, options }) => (
          <Grid key={label} size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                value={values[label]}
                label={label}
                onChange={handleChange(label)}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: 'text.secondary',
                minHeight: '1.5em'
              }}
            >
              {values[label] ? `선택: ${values[label]}` : '선택 대기 중...'}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DropdownSection;
