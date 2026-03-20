import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const menuItems = ['홈', '소개', '서비스', '연락처'];

/**
 * NavigationSection 컴포넌트
 *
 * MUI AppBar/Toolbar 기반 네비게이션 바 (모바일 햄버거 메뉴 포함)
 *
 * Props: 없음
 *
 * Example usage:
 * <NavigationSection />
 */
function NavigationSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (menu) => {
    alert(`${menu} 메뉴가 클릭되었습니다!`);
    setIsDrawerOpen(false);
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
        Navigation
      </Typography>

      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            MyApp
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((menu) => (
                <Button
                  key={menu}
                  color="inherit"
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((menu) => (
              <ListItem key={menu} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(menu)}>
                  <ListItemText primary={menu} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavigationSection;
