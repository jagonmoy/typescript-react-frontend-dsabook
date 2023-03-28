import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignedInDropdown } from '../../components/dropdown/SignedInDropdown';

describe('<SignedInDropdown />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignedInDropdown/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
