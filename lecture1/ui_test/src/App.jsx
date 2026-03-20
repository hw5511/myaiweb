import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonSection from './components/sections/button-section';
import InputSection from './components/sections/input-section';
import NavigationSection from './components/sections/navigation-section';
import DropdownSection from './components/sections/dropdown-section';
import CheckboxSection from './components/sections/checkbox-section';
import HoverSection from './components/sections/hover-section';
import AnimationSection from './components/sections/animation-section';
import DragDropSection from './components/sections/drag-drop-section';

/**
 * App 컴포넌트
 *
 * 16개 UI 섹션을 순차적으로 표시하는 메인 레이아웃
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 }
    }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 4
          }}
        >
          UI Components Test
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}
        >
          16개의 UI 섹션이 순차적으로 추가됩니다.
        </Typography>

        {/* 섹션 추가 영역 */}
        <ButtonSection />
        <InputSection />
        <NavigationSection />
        <DropdownSection />
        <CheckboxSection />
        <HoverSection />
        <AnimationSection />
        <DragDropSection />

      </Container>
    </Box>
  );
}

export default App;
