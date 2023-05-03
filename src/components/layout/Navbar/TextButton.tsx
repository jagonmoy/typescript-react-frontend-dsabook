import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    path: string,
    text: string
}

export const TextButton : React.FC<Props> = ({path,text}) => {
  const navigate = useNavigate();
  return (
    <div>
       <Button 
       variant="text"
       onClick={()=>navigate(path)}
       style={{ color: 'white' }}
       >
        {text}
       </Button>
    </div>
  );
}
