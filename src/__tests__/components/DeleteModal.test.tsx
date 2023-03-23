import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DeleteModal } from '../../components/DeleteModal';

describe('<DeleteModal />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <DeleteModal/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
