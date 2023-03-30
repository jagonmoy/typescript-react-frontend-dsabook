import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CreateBlogDetails } from '../../components/blogs/createBlogDetails/CreateBlogDetails.style';

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
