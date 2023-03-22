import { render} from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';
import { BrowserRouter } from 'react-router-dom';

describe('SignIn Page', () => {
    it('should have one Navbar component', () => {
        const { queryAllByTestId } = render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>);
        const navbar = queryAllByTestId('navbar');
        expect(navbar).toHaveLength(1);
    });

    it('should have one SignInDetails component', () => {
        const { queryAllByTestId } = render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>);
        const blogCardlist = queryAllByTestId('sign-in-details');
        expect(blogCardlist).toHaveLength(1);
    });
});
