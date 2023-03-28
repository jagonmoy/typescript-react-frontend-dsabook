import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../components/common/Footer';

describe('<Footer />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
