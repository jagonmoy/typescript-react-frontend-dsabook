import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CreateBlogDetails } from '../../components/blogs/CreateBlogDetails';

describe('<CreateBlogDetails />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <CreateBlogDetails/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
