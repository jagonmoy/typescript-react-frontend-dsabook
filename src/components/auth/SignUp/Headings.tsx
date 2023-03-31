import React from 'react';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AvatarWrapper } from '../form.style'

export const Headings: React.FC = () => {
    return (
        <div>
            <AvatarWrapper>
                <LockOutlinedIcon />
            </AvatarWrapper>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
        </div>
    );
}
