import React from 'react';
import { SubmitButton } from '../form.style';
interface Props {
}

export const Button: React.FC<Props> = () => {
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
