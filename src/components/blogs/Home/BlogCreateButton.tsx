import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

export const BlogCreateButton : React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
    sx={{
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button variant="outlined" startIcon={<AddCircleIcon />} size='large' onClick={()=>navigate("/blog/create")}>
        Want to Create a Blog ?
    </Button>
    </Box>
  );
}
