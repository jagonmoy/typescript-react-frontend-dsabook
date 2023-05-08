import { screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../../components/layout/Navbar/Navbar';
import { renderWithProviders } from '../../../utils/test-utils';
import { render } from 'react-dom';

describe('<Navbar />', () => {
    it('should contain DSABook text', () => {
        renderWithProviders(<Navbar/>)
        const DSABooktext = screen.getByTestId('DSABOOK');
        expect(DSABooktext.textContent).toBe('DSABOOK')
    });

    it('should trigger route change when DSABook text is clicked', () => {
        renderWithProviders(<Navbar/>)
        const DSABooktext = screen.getByTestId('DSABOOK');
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe('/');
    });

    it('should contain SignIn text', async () => {
        renderWithProviders(<Navbar/>)
        const signinbutton = await screen.findByRole('button', { name: 'Sign In' });
        fireEvent.click(signinbutton);
        expect(window.location.pathname).toBe('/sign-in');
    });

    it('should contain SignOut Button and username if user is signed in', async () => {
        renderWithProviders(<Navbar/>,{
            preloadedState: {
                user: {
                    username: 'xyz',
                    accessToken: 'asdas'
                }
            }
        })
        await screen.findByRole('button', { name: 'Sign Out' });
        expect(screen.getByText('xyz')).toBeInTheDocument()
    });


});