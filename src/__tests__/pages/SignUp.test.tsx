import { render, screen} from '@testing-library/react';
import { SignUp } from '../../pages/auth/SignUp';
import { BrowserRouter } from 'react-router-dom';

describe('<SignUp />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignUp/>
            </BrowserRouter >
        )
    }
    it('should actually render',() => {
        setup();
    })
    it('should have one Navbar component', () => {
        setup()
        const navbar = screen.queryAllByTestId('navbar');
        expect(navbar).toHaveLength(1);
    });

    it('should have one SignUpDetails component', () => {
        setup()
        const blogCardlist = screen.queryAllByTestId('sign-up-details');
        expect(blogCardlist).toHaveLength(1);
    });
});
