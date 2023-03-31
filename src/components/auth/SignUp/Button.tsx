import React from 'react';
import { SubmitButton } from '../form.style';
interface Props {
}

export const Button: React.FC<Props> = () => {
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
