import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { EditModal } from '../../components/EditModal';

describe('<EditModal />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <EditModal/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
