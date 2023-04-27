import { screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../../components/layout/Navbar/Navbar';
import { renderWithProviders } from '../../../utils/test-utils';
import { render } from 'react-dom';

describe('<Navbar />', () => {
    it('should contain DSABook text', () => {
        renderWithProviders(<Navbar/>)
        const DSABooktext = screen.getByTestId('DSABook-text');
        expect(DSABooktext.textContent).toBe('DSABook')
    });

    // it('should contain SignedOutDropdown component when no user is logged in and should not contin SignedInDropdown Component', () => {
    //     renderWithProviders(<Navbar/>,{preloadedState : {
    //         blogs: {
    //             blogs: []
    //         },
    //         user: {
    //             status: false,
    //             username: ''
    //         }
    //     }})
    //     const signedOutDropdown = screen.getByTestId('signed-out-dropdown');
    //     expect(signedOutDropdown.textContent).toBe('AUTH')
    //     expect(screen.queryByTestId('signed-in-dropdown')).not.toBeInTheDocument()
    // });
    // it('should contain SignedInDropdown component when there is a user logged in and should not contin SignedOutDropdown Component', () => {
    //     renderWithProviders(<Navbar/>,{preloadedState : {
    //         blogs: {
    //             blogs: []
    //         },
    //         user: {
    //             status: true,
    //             username: 'xyz'
    //         }
    //     }})
    //     const signedInDropdown = screen.getByTestId('signed-in-dropdown');
    //     expect(signedInDropdown.textContent).toBe('xyz')
    //     expect(screen.queryByTestId('signed-out-dropdown')).not.toBeInTheDocument()
    // });
    // it('should trigger route change when DSABook text is clicked', () => {
    //     renderWithProviders(<Navbar/>)
    //     const DSABooktext = screen.getByTestId('DSABook-text');
    //     fireEvent.click(DSABooktext);
    //     expect(window.location.pathname).toBe('/');
    // });
});