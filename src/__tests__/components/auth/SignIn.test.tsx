import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignIn } from '../../../components/auth/SignIn/SignIn';
import { testStore } from '../../../testSetup';
import { Provider } from 'react-redux';


describe('<SignIn />', () => {
    const setup = (): void => {
        render(
            <Provider store={testStore} >
                <BrowserRouter> 
                    <SignIn />
                </BrowserRouter>
            </Provider>
        )
    }
    it('should initially render', () => {
        setup();
    })
    it('should have a form, email and password field', () => {
        setup();
        expect(screen.getByLabelText('Sign In')).toBeInTheDocument();
        expect(screen.getByLabelText('Email *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
    })
    it('checking email input', () => {
        setup();
        const emailInput: any = screen.getByLabelText('Email *');
        console.log(typeof(emailInput))
        expect(emailInput).toHaveAttribute("type", "email")
        // console.log("hello")
        // console.log(emailInput.value)
        expect(emailInput.value).toEqual("");
        expect(emailInput.value).not.toEqual("a     ");
        fireEvent.change(emailInput, { target: { value: 'test' } });
        console.log(emailInput.value)
        // expect(emailInput.value).toEqual('testing');
        // expect(emailInput.value).not.toEqual('t');
    })
    //     it('checking password input', () => {
    //         setup();
    //         const passwordInput: any = screen.getByLabelText('Password *');
    //         expect(passwordInput).toHaveAttribute("type", "password")
    //         expect(passwordInput.value).toEqual("");
    //         expect(passwordInput.value).not.toEqual("a     ");
    //         fireEvent.change(passwordInput, { target: { value: '12345678' } });
    //         expect(passwordInput.value).toEqual('12345678');
    //         expect(passwordInput.value).not.toEqual('1234567');
    //     })
    //     it('should be able to submit form', () => {
    //         setup();
    //         const spy = jest.spyOn(console, 'log');
    //         // fireEvent.submit(screen.getByTestId('sign-in-form'));

    //         fireEvent.change(screen.getByLabelText('Email *'), {
    //             target: { value: 'test@example.com' },
    //         });
    //         fireEvent.change(screen.getByLabelText('Password *'), {
    //             target: { value: 'password' },
    //         });
    //         fireEvent.submit(screen.getByTestId('sign-in-submit'));
    // ;
    //         expect(spy).toHaveBeenCalled();

    //     })
    //     it("should trigger route change when (Don't have an account? Sign Up) text is clicked", () => {
    //         setup();
    //         const DSABooktext = screen.getByText("Don't have an account? Sign Up");
    //         fireEvent.click(DSABooktext);
    //         expect(window.location.pathname).toBe('/sign-up');
    //     });

});
