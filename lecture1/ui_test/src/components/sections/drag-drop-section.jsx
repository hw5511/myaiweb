import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const initialItems = [
  { id: 'item-1', label: 'React' },
  { id: 'item-2', label: 'Vue' },
  { id: 'item-3', label: 'Angular' },
  { id: 'item-4', label: 'Svelte' },
  { id: 'item-5', label: 'Next.js' }
];

/**
 * DragDropSection 컴포넌트
 *
 * HTML5 Drag and Drop API 기반 아이템 이동 섹션
 *
 * Props: 없음
 *
 * Example usage:
 * <DragDropSection />
 */
function DragDropSection() {
  const [sourceItems, setSourceItems] = useState(initialItems);
  const [dropItems, setDropItems] = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [isDragOver, setIsDragOver] = useState(null);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
    setDraggingId(item.id);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setIsDragOver(null);
  };

  const handleDragOver = (e, zone) => {
    e.preventDefault();
    setIsDragOver(zone);
  };

  const handleDragLeave = () => {
    setIsDragOver(null);
  };

  const handleDropToTarget = (e) => {
    e.preventDefault();
    setIsDragOver(null);
    const item = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (sourceItems.find((i) => i.id === item.id)) {
      setSourceItems((prev) => prev.filter((i) => i.id !== item.id));
      setDropItems((prev) => [...prev, item]);
    }
  };

  const handleDropToSource = (e) => {
    e.preventDefault();
    setIsDragOver(null);
    const item = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (dropItems.find((i) => i.id === item.id)) {
      setDropItems((prev) => prev.filter((i) => i.id !== item.id));
      setSourceItems((prev) => [...prev, item]);
    }
  };

  const handleReset = () => {
    setSourceItems(initialItems);
    setDropItems([]);
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.4rem', md: '1.6rem' }
          }}
        >
          Drag &amp; Drop
        </Typography>
        <Button variant="text" size="small" onClick={handleReset}>
          초기화
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
            드래그 영역
          </Typography>
          <Paper
            variant="outlined"
            onDragOver={(e) => handleDragOver(e, 'source')}
            onDragLeave={handleDragLeave}
            onDrop={handleDropToSource}
            sx={{
              p: 2,
              minHeight: 120,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              alignContent: 'flex-start',
              bgcolor: isDragOver === 'source' ? 'primary.50' : 'background.paper',
              borderColor: isDragOver === 'source' ? 'primary.main' : 'divider',
              borderWidth: 2,
              borderStyle: 'dashed',
              transition: 'all 0.2s ease'
            }}
          >
            {sourceItems.length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.disabled', width: '100%', textAlign: 'center', py: 2 }}>
                비어 있음
              </Typography>
            )}
            {sourceItems.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
                sx={{
                  cursor: 'grab',
                  opacity: draggingId === item.id ? 0.4 : 1,
                  transition: 'opacity 0.2s ease',
                  '&:active': { cursor: 'grabbing' }
                }}
              />
            ))}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
            드롭 영역 ({dropItems.length}개)
          </Typography>
          <Paper
            variant="outlined"
            onDragOver={(e) => handleDragOver(e, 'target')}
            onDragLeave={handleDragLeave}
            onDrop={handleDropToTarget}
            sx={{
              p: 2,
              minHeight: 120,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              alignContent: 'flex-start',
              bgcolor: isDragOver === 'target' ? 'success.50' : 'background.paper',
              borderColor: isDragOver === 'target' ? 'success.main' : 'divider',
              borderWidth: 2,
              borderStyle: 'dashed',
              transition: 'all 0.2s ease'
            }}
          >
            {dropItems.length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.disabled', width: '100%', textAlign: 'center', py: 2 }}>
                여기에 드롭하세요
              </Typography>
            )}
            {dropItems.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                color="success"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
                sx={{
                  cursor: 'grab',
                  opacity: draggingId === item.id ? 0.4 : 1,
                  transition: 'opacity 0.2s ease',
                  '&:active': { cursor: 'grabbing' }
                }}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DragDropSection;
