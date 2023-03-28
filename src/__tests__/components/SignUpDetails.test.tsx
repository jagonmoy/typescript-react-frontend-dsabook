import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignUpDetails } from '../../components/forms/SignUpDetails';

describe('<SignUpDetails />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignUpDetails />
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
    it('should have a form and email,password,confirm password,username,name field',() => {
        setup();
        expect(screen.getByLabelText('Sign Up')).toBeInTheDocument();
        expect(screen.getByLabelText('Name *')).toBeInTheDocument();
        expect(screen.getByLabelText('Username *')).toBeInTheDocument();
        expect(screen.getByLabelText('Email Address *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password *')).toBeInTheDocument();
    })
    it('checking name input',() => {
        setup();
        const nameInput : any = screen.getByLabelText('Name *');
        expect(nameInput).toHaveAttribute("type","text")
        expect(nameInput.value).toEqual("");
        expect(nameInput.value).not.toEqual("a     ");
        fireEvent.change(nameInput, {target : {value:'testname'}});
        expect(nameInput.value).toEqual('testname');
        expect(nameInput.value).not.toEqual('testna');
    })
    it('checking username input',() => {
        setup();
        const usernameInput : any = screen.getByLabelText('Username *');
        expect(usernameInput).toHaveAttribute("type","text")
        expect(usernameInput.value).toEqual("");
        expect(usernameInput.value).not.toEqual("a     ");
        fireEvent.change(usernameInput, {target : {value:'testusername'}});
        expect(usernameInput.value).toEqual('testusername');
        expect(usernameInput.value).not.toEqual('testuserna');
    })
    it('checking email input',() => {
        setup();
        const emailInput : any = screen.getByLabelText('Email Address *');
        expect(emailInput).toHaveAttribute("type","email")
        expect(emailInput.value).toEqual("");
        expect(emailInput.value).not.toEqual("a     ");
        fireEvent.change(emailInput, {target : {value:'testing'}});
        expect(emailInput.value).toEqual('testing');
        expect(emailInput.value).not.toEqual('t');
    })
    it('checking password input',() => {
        setup();
        const passwordInput : any = screen.getByLabelText('Password *');
        expect(passwordInput).toHaveAttribute("type","password")
        expect(passwordInput.value).toEqual("");
        expect(passwordInput.value).not.toEqual("a     ");
        fireEvent.change(passwordInput, {target : {value:'12345678'}});
        expect(passwordInput.value).toEqual('12345678');
        expect(passwordInput.value).not.toEqual('1234567');
    })
    it('checking confirm password input',() => {
        setup();
        const confirmPasswordInput : any = screen.getByLabelText('Confirm Password *');
        const passwordInput : any = screen.getByLabelText('Password *');
        expect(confirmPasswordInput).toHaveAttribute("type","password")

        expect(confirmPasswordInput.value).toEqual("");
        expect(confirmPasswordInput.value).toEqual(passwordInput.value);
        expect(confirmPasswordInput.value).not.toEqual("a     ");

        fireEvent.change(confirmPasswordInput, {target : {value:'12345678'}});
        fireEvent.change(passwordInput, {target : {value:'12345678'}});
        expect(confirmPasswordInput.value).toEqual(passwordInput.value);

        fireEvent.change(passwordInput, {target : {value:'123456789'}});
        expect(confirmPasswordInput.value).not.toEqual(passwordInput.value);
    })
    // it('should be able to submit form',() => {
    //     // setup();
    //     // const mockfn = jest.fn();

    // })
    it("should trigger route change when (Already have an account? Sign in) text is clicked", () => {
        setup();
        const DSABooktext = screen.getByText("Already have an account? Sign in");
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe('/sign-in');
    });
    
});
