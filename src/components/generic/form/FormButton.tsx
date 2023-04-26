import React from 'react';
import { SubmitButton } from './form.style';

interface Button {
    label: string,
    testId: string
    isLoading: boolean
}

export const FormButton: React.FC <Button> = ({label,testId,isLoading}) => {
    return (
        <div>
            <SubmitButton
                data-testid={`${testId}-submit`}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="small"
                loading={isLoading}
                loadingPosition="end"
            >
               {label}
            </SubmitButton>
        </div>
    );
}
