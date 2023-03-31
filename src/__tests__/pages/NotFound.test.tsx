import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../../components/miscellaneous/NotFound/NotFound';

describe('<NotFound />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <NotFound/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
