import { screen,fireEvent} from '@testing-library/react';
import { SignedOutDropdown } from '../../../components/layout/Navbar/SignedOutDropdown';
import { renderWithProviders } from '../../../utils/test-utils';

describe('<SignedOutDropdown />', () => {
    it ('should have a button named AUTH',() => {
       renderWithProviders(<SignedOutDropdown/>)
       const spy = jest.spyOn(console, 'log');
       const button = screen.getByRole('button',{name : /AUTH/i })
       fireEvent.click(button);
       expect(spy).toHaveBeenCalledWith('AUTH menu opened');      
    })
    it ('After Clicking the AUTH Button It should open a Menu',() => {
        renderWithProviders(<SignedOutDropdown/>)
        const button = screen.getByRole('button',{name : /AUTH/i })
        fireEvent.click(button);
        const menu = screen.getByRole('menu')
        expect(menu.textContent).toContain('Sign in')
        expect(menu.textContent).toContain('Sign up')
     })
     it ('After Clicking Signin it should redirect to signin page',() => {
        renderWithProviders(<SignedOutDropdown/>)
        const button = screen.getByRole('button',{name : /AUTH/i })
        fireEvent.click(button);
        const signIntext = screen.getByTestId('sign-in-item');
        fireEvent.click(signIntext);
        expect(window.location.pathname).toBe('/sign-in');

     })
     it ('After Clicking Signup it should redirect to signup page',() => {
        renderWithProviders(<SignedOutDropdown/>)
        const button = screen.getByRole('button',{name : /AUTH/i })
        fireEvent.click(button);
        const signUptext = screen.getByTestId('sign-up-item');
        fireEvent.click(signUptext);
        expect(window.location.pathname).toBe('/sign-up');

     })
});
