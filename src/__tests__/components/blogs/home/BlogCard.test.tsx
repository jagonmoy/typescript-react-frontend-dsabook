import { screen, fireEvent } from '@testing-library/react';
import { BlogCard } from '../../../../components/blogs/Home/BlogCard';
import { renderWithProviders } from '../../../../utils/test-utils';
import { BlogInterface } from '../../../../models/blogModel';

describe('<BlogCard />', () => {
    let mockBlog: BlogInterface;
    const setup = () => {
        renderWithProviders(<BlogCard id={mockBlog.id} blogHeadline={mockBlog.blogHeadline} blogDescription={mockBlog.blogDescription} author={mockBlog.author} />)
    }
    beforeEach(() => {
        mockBlog =
            { id: "1", blogHeadline: 'Blog Headline 1', blogDescription: 'Blog Description 1', author: "x" }
    })
    it('should contain blog card content component', () => {
        setup()
        expect(screen.queryByTestId('card-content-testid')).toBeInTheDocument()
    })
    it('should navigate to blogView page according to id', () => {
        setup()
        const DSABooktext = screen.getByText("See More");
        fireEvent.click(DSABooktext);
        expect(window.location.pathname).toBe(`/blogs/${mockBlog.id}`);
    })
    // it('BlogCard Test', () => {
    // //     setup()
    // //     const navbar = screen.queryAllByTestId('navbar');
    // //     expect(navbar).toHaveLength(1);
    // // });

    // // it('should contain one BlogCardList', () => {
    // //     setup()
    // //     const blogCardlist = screen.queryAllByTestId ('blog-card-list');
    // //     expect(blogCardlist).toHaveLength(1);
    // // });

});