import { screen, fireEvent } from '@testing-library/react';
import { SignUp } from '../../../components/auth/SignUp/SignUp';
import { renderWithProviders } from '../../../utils/test-utils';

describe('<SignIn />', () => {
    const setup = () => renderWithProviders(<SignUp/>)
    it('should initially render', () => {
        setup();
    })
    it('should have a form, email and password field', () => {
        setup()
        expect(screen.getByLabelText('Sign Up')).toBeInTheDocument();
        expect(screen.getByLabelText('Username *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
        expect(screen.getByLabelText('Email *')).toBeInTheDocument();
        expect(screen.getByLabelText('Name *')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password *')).toBeInTheDocument();
    })
    it('checking username input', () => {
        setup();
        const usernameInput: any = screen.getByLabelText('Username *');
        expect(usernameInput).toHaveAttribute("type", "text")
        expect(usernameInput.value).toEqual("");
        expect(usernameInput.value).not.toEqual("a     ");
        fireEvent.change(usernameInput, { target: { value: 'testusername' } });
        expect(usernameInput.value).toEqual('testusername');
        expect(usernameInput.value).not.toEqual('t');
    })
    it('checking name input', () => {
        setup();
        const nameInput: any = screen.getByLabelText('Name *');
        expect(nameInput).toHaveAttribute("type", "text")
        expect(nameInput.value).toEqual("");
        expect(nameInput.value).not.toEqual("a     ");
        fireEvent.change(nameInput, { target: { value: 'testname' } });
        expect(nameInput.value).toEqual('testname');
        expect(nameInput.value).not.toEqual('t');
    })
    it('checking password input', () => {
        setup();
        const passwordInput: any = screen.getByLabelText('Password *');
        expect(passwordInput).toHaveAttribute("type", "password")
        expect(passwordInput.value).toEqual("");
        expect(passwordInput.value).not.toEqual("a     ");
        fireEvent.change(passwordInput, { target: { value: '12345678' } });
        expect(passwordInput.value).toEqual('12345678');
        expect(passwordInput.value).not.toEqual('1234567');
    })
    it('checking confirm password input', () => {
        setup();
        const passwordInput: any = screen.getByLabelText('Confirm Password *');
        expect(passwordInput).toHaveAttribute("type", "password")
        expect(passwordInput.value).toEqual("");
        expect(passwordInput.value).not.toEqual("a     ");
        fireEvent.change(passwordInput, { target: { value: '12345678' } });
        expect(passwordInput.value).toEqual('12345678');
        expect(passwordInput.value).not.toEqual('1234567');
    })
    it('checking email input', () => {
        setup();
        const passwordInput: any = screen.getByLabelText('Email *');
        expect(passwordInput).toHaveAttribute("type", "email")
        expect(passwordInput.value).toEqual("");
        expect(passwordInput.value).not.toEqual("a     ");
        fireEvent.change(passwordInput, { target: { value: 'test@mail.com' } });
        expect(passwordInput.value).toEqual('test@mail.com');
        expect(passwordInput.value).not.toEqual('t@mail.com');
    })
    it('should be able to submit form', () => {
        setup();
        const name : any = screen.getByLabelText('Name *');
        fireEvent.change(name, { target: { value: 'testname' }});

        const username : any = screen.getByLabelText('Username *');
        fireEvent.change(username, { target: { value: 'testusername' }});

        const email : any = screen.getByLabelText('Email *');
        fireEvent.change(email, { target: { value: 'test@mail.com' }})

        const password : any = screen.getByLabelText('Password *');
        fireEvent.change(password, { target: { value: '12345' }});

        const confirmPassword : any = screen.getByLabelText('Confirm Password *');
        fireEvent.change(confirmPassword, { target: { value: '12345' }});
    
    
        fireEvent.submit(screen.getByTestId('sign-up-form'));
        expect(window.location.pathname).toBe('/sign-in')

    })
    it("should trigger route change when (Already have an account? Sign in) text is clicked", () => {
        setup();
        const DSABooktext = screen.getByText("Already have an account? Sign in");
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe('/sign-in');
    });

});
