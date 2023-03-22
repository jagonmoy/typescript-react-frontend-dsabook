import { render} from '@testing-library/react';
import { SignUp } from '../../pages/SignUp';
import { BrowserRouter } from 'react-router-dom';

describe('SignUp Page', () => {
    it('should have one Navbar component', () => {
        const { queryAllByTestId } = render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>);
        const navbar = queryAllByTestId('navbar');
        expect(navbar).toHaveLength(1);
    });

    it('should have one SignUpDetails component', () => {
        const { queryAllByTestId } = render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>);
        const blogCardlist = queryAllByTestId('sign-up-details');
        expect(blogCardlist).toHaveLength(1);
    });
});
