import React from 'react';
import Alert from '@mui/material/Alert';

export const ErrorAlert: React.FC<{ error: string }> = ({ error }) => {
    return (
        <Alert severity="error">
            <strong>{error}</strong>
        </Alert>
    )
}
