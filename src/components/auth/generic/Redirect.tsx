import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { Redirection } from '../../../models/userModel'; 
export const Redirect: React.FC<Redirection> = ({path,label}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Grid item>
                <Link onClick={()=>navigate(path)} variant="body2">
                    {label}
                </Link>
            </Grid>
        </div>
    );
}
