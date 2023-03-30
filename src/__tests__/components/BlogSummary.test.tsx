import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BlogSummary } from '../../components/blogs/blogSummary/BlogSummary';

describe('<BlogSummary />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <BlogSummary/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
});
