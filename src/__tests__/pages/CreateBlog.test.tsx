import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CreateBlog } from '../../pages/blogs/CreateBlog';

describe('<CreateBlogDetails />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <CreateBlog/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
