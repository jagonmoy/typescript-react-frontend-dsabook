import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


describe('Navbar Component', () => {
    it('should contain DSABook text', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>);
        const DSABooktext = getByTestId('DSABook-text');
        expect(DSABooktext.textContent).toBe('DSABook')
    });

    it('should contain SignedOutDropdown component', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>);
        const signedOutDropdown = getByTestId('signed-out-dropdown');
        expect(signedOutDropdown.textContent).toBe('AUTH')
    });
    it('should trigger route change when DSABook text is clicked', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>);
        const DSABooktext = getByTestId('DSABook-text');
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe('/');
    });
});
