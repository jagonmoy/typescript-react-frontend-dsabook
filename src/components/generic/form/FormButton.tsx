import React from 'react';
import { SubmitButton } from './form.style';

interface Button {
    label: string,
    testId: string
}

export const FormButton: React.FC <Button> = ({label,testId}) => {
    return (
        <div>
            <SubmitButton
                data-testid={`${testId}-submit`}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                {label}
            </SubmitButton>
        </div>
    );
}
