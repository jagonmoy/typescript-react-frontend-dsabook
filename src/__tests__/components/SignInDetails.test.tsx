import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignInDetails } from '../../components/SignInDetails';
import { SignInInterface } from '../../models/userModel';

describe('<SignInDetails />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignInDetails />
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
    it('should have a form, email and password field',() => {
        setup();
        expect(screen.getByLabelText('Sign In')).toBeInTheDocument();
        expect(screen.getByLabelText('Email *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
    })
    it('checking email input',() => {
        setup();
        const emailInput : any = screen.getByLabelText('Email *');
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
    it('should be able to submit form',() => {
        // setup();
        // const mockfn = jest.fn();

    })
    
});
