import { screen, fireEvent } from '@testing-library/react';
import { SignIn } from '../../../components/auth/SignIn/SignIn';
import { renderWithProviders } from '../../../utils/test-utils';
import {userAuth} from '../../../slices/userSlice'


describe('<SignIn />', () => {
    const setup = () => renderWithProviders(<SignIn/>)
    it('should initially render', () => {
        setup();
    })
    // it('should have a form, email and password field', () => {
    //     setup()
    //     expect(screen.getByLabelText('Sign In')).toBeInTheDocument();
    //     expect(screen.getByLabelText('Username *')).toBeInTheDocument();
    //     expect(screen.getByLabelText('Password *')).toBeInTheDocument();
    // })
    // it('checking username input', () => {
    //     setup();
    //     const usernameInput: any = screen.getByLabelText('Username *');
    //     expect(usernameInput).toHaveAttribute("type", "text")
    //     expect(usernameInput.value).toEqual("");
    //     expect(usernameInput.value).not.toEqual("a     ");
    //     fireEvent.change(usernameInput, { target: { value: 'testing' } });
    //     expect(usernameInput.value).toEqual('testing');
    //     expect(usernameInput.value).not.toEqual('t');
    // })
    // it('checking password input', () => {
    //     setup();
    //     const passwordInput: any = screen.getByLabelText('Password *');
    //     expect(passwordInput).toHaveAttribute("type", "password")
    //     expect(passwordInput.value).toEqual("");
    //     expect(passwordInput.value).not.toEqual("a     ");
    //     fireEvent.change(passwordInput, { target: { value: '12345678' } });
    //     expect(passwordInput.value).toEqual('12345678');
    //     expect(passwordInput.value).not.toEqual('1234567');
    // })
    // it('should be able to submit form', () => {
    //     setup();
    //     const spy = jest.spyOn(console, 'log');

    //     const username : any = screen.getByLabelText('Username *');
    //     fireEvent.change(username, { target: { value: 'testing' }});

    //     const password : any = screen.getByLabelText('Password *');
    //     fireEvent.change(password, { target: { value: '12345' }});
    
    //     fireEvent.submit(screen.getByTestId('sign-in-form'));
    //     expect(spy).toHaveBeenCalledTimes(1);

    // })
    // it('Check initial state before submitting and states after submit', () => {
    //     const {store} = renderWithProviders(<SignIn/>)
    //     const dispatch = jest.spyOn(store,'dispatch')

    //     const username : any = screen.getByLabelText('Username *');
    //     const password : any = screen.getByLabelText('Password *');
        
    //     expect(store.getState().user).toEqual({ username: '', status: false })
       
    //     fireEvent.change(username, { target: { value: 'testuser' }});
    //     fireEvent.change(password, { target: { value: '' }});

    //     fireEvent.submit(screen.getByTestId('sign-in-form'));
    //     expect(dispatch).not.toHaveBeenCalledWith(userAuth({ username: 'testuser', status: true }));
    //     expect(store.getState().user).toEqual({username: '', status: false})

    //     fireEvent.change(password, { target: { value: '12345' }});

    //     fireEvent.submit(screen.getByTestId('sign-in-form'));
    //     expect(dispatch).toHaveBeenCalledWith(userAuth({ username: 'testuser', status: true }));
    //     expect(store.getState().user).toEqual({username: 'testuser', status: true})
    //     expect(window.location.pathname).toBe('/home')

    // })
    // it("should trigger route change when (Don't have an account? Sign Up) text is clicked", () => {
    //     setup();
    //     const DSABooktext = screen.getByText("Don't have an account? Sign Up");
    //     fireEvent.click(DSABooktext);
    //     expect(window.location.pathname).toBe('/sign-up');
    // });

});
