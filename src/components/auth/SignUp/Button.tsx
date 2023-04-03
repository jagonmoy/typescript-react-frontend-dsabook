import React from 'react';
import { SubmitButton } from '../form.style';

export const Button: React.FC = () => {
    return (
        <div>
            <SubmitButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Sign Up
            </SubmitButton>
        </div>
    );
}
