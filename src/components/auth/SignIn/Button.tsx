import React from 'react';
import { SubmitButton } from '../form.style';

export const Button: React.FC = () => {
    return (
        <div>
            <SubmitButton
                data-testid='sign-in-submit'
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Sign In
            </SubmitButton>
        </div>
    );
}
