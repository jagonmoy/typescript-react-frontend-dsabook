import { render,screen} from '@testing-library/react';
import { Home } from '../../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <Home/>
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

    it('should contain one BlogCardList', () => {
        setup()
        const blogCardlist = screen.queryAllByTestId ('blog-card-list');
        expect(blogCardlist).toHaveLength(1);
    });
    
});
