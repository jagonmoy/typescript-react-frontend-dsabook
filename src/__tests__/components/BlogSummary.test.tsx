import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BlogSummary } from '../../components/blogs/Home/BlogCardContentDescription';

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
