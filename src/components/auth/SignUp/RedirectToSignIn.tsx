import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const RedirectToSignIn: React.FC = () => {
    const navigate = useNavigate();
    const routeSignIn = () => {
        let path = `/sign-in`;
        navigate(path);
    };

    return (
        <div>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link onClick={routeSignIn} variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
