import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const RedirectToSignUp: React.FC = () => {
    const navigate = useNavigate();
    const routeSignUp = () => {
        let path = `/sign-up`;
        navigate(path);
    };
    return (
        <div>
            <Grid item>
                <Link onClick={routeSignUp} variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </div>
    );
}
