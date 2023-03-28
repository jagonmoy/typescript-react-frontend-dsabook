import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';

describe('<Navbar />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
    it('should contain DSABook text', () => {
        setup();
        const DSABooktext = screen.getByTestId('DSABook-text');
        expect(DSABooktext.textContent).toBe('DSABook')
    });

    it('should contain SignedOutDropdown component', () => {
        setup()
        const signedOutDropdown = screen.getByTestId('signed-out-dropdown');
        expect(signedOutDropdown.textContent).toBe('AUTH')
    });
    it('should trigger route change when DSABook text is clicked', () => {
        setup();
        const DSABooktext = screen.getByTestId('DSABook-text');
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe('/');
    });
});
