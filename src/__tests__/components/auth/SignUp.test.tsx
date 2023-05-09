import { screen, fireEvent, waitFor } from '@testing-library/react';
import { SignUp } from '../../../components/auth/SignUp/SignUp';
import { renderWithProviders } from '../../../utils/test-utils';
import { userAuth } from '../../../slices/userSlice'
import { server } from '../../../mock/api/server'
import { rest } from 'msw'

describe('<SignUp />', () => {

    server.use(
        rest.post('*', (req, res, ctx) => {
            return res(ctx.json({}))
        }
        )
    );

    const setup = () => renderWithProviders(<SignUp />)
    it('should initially render', () => {
        setup();
    })
    it('should have a form, email and password field',() => {
        setup()
        expect(screen.getByLabelText('Sign Up')).toBeInTheDocument();
        expect(screen.getByLabelText('Username *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
        expect(screen.getByLabelText('Email *')).toBeInTheDocument();
        expect(screen.getByLabelText('Password *')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password *')).toBeInTheDocument();

    })
    it('checking username input', () => {
        setup();
        const usernameInput: any = screen.getByLabelText('Username *');
        expect(usernameInput).toHaveAttribute("type", "text")
        expect(usernameInput.value).toEqual("");
        expect(usernameInput.value).not.toEqual("a     ");
        fireEvent.change(usernameInput, { target: { value: 'testing' } });
        expect(usernameInput.value).toEqual('testing');
        expect(usernameInput.value).not.toEqual('t');
    })
    it('checking name input', () => {
        setup();
        const nameInput: any = screen.getByLabelText('Name *');
        expect(nameInput).toHaveAttribute("type", "text")
        expect(nameInput.value).toEqual("");
        expect(nameInput.value).not.toEqual("a     ");
        fireEvent.change(nameInput, { target: { value: 'testing' } });
        expect(nameInput.value).toEqual('testing');
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
    // it('should be able to submit form', () => {
    //     setup();
    //     const spy = jest.spyOn(console, 'log');

    //     const username: any = screen.getByLabelText('Username *');
    //     fireEvent.change(username, { target: { value: 'jagonmoy' } });

    //     const password: any = screen.getByLabelText('Password *');
    //     fireEvent.change(password, { target: { value: '12345678' } });

    //     fireEvent.submit(screen.getByTestId('sign-in-form'));
    //     expect(spy).toHaveBeenCalledTimes(1);

    // })
    it("should trigger route change when (Already have an account?) Sign in text is clicked", () => {
        setup();
        const text = screen.getByText("Already have an account? Sign in");
        fireEvent.click(text);
        expect(window.location.pathname).toBe('/sign-in');
    });

});
