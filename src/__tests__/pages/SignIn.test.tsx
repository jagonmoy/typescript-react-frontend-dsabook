import { render, screen} from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';
import { BrowserRouter } from 'react-router-dom';

describe('<SignIn />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignIn/>
            </BrowserRouter >
        )
    }
    it('should actually render',() => {
        setup();
    })
    it('should have one Navbar component', () => {
        setup();
        const navbar = screen.queryAllByTestId('navbar');
        expect(navbar).toHaveLength(1);
    });

    it('should have one SignInDetails component', () => {
        setup()
        const blogCardlist = screen.queryAllByTestId('sign-in-details');
        expect(blogCardlist).toHaveLength(1);
    });
});
