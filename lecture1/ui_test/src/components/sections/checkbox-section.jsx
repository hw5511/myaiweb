import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

const items = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'react', label: 'React' },
  { id: 'nodejs', label: 'Node.js' }
];

/**
 * CheckboxSection 컴포넌트
 *
 * MUI Checkbox 기반 다중 선택 및 전체 선택/해제 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <CheckboxSection />
 */
function CheckboxSection() {
  const [checked, setChecked] = useState([]);

  const isAllChecked = checked.length === items.length;
  const isIndeterminate = checked.length > 0 && checked.length < items.length;

  const handleToggle = (id) => {
    setChecked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (isAllChecked) {
      setChecked([]);
    } else {
      setChecked(items.map((item) => item.id));
    }
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
        Checkbox
      </Typography>

      <Box sx={{ p: { xs: 2, md: 3 }, border: 1, borderColor: 'divider', borderRadius: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAllChecked}
              indeterminate={isIndeterminate}
              onChange={handleToggleAll}
            />
          }
          label="전체 선택"
          sx={{ fontWeight: 600 }}
        />
        <Divider sx={{ my: 1 }} />
        <FormGroup>
          {items.map(({ id, label }) => (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  checked={checked.includes(id)}
                  onChange={() => handleToggle(id)}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {checked.length}개 / {items.length}개 선택됨
        </Typography>
      </Box>
    </Box>
  );
}

export default CheckboxSection;
