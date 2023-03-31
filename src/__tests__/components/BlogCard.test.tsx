import { BrowserRouter } from "react-router-dom";
import { BlogCard } from "../../components/blogs/Home/BlogCard";
import { render, screen, fireEvent } from "@testing-library/react";
describe('<BlogCard />', () => {
    interface Blog {
        id: string;
        blogHeadline: string;
        blogDescription: string;
        author: string;
    }
    let mockBlog: Blog;
    const setup = (): void => {
        render(
            <BrowserRouter>
                <BlogCard id={mockBlog.id}
                    blogHeadline={mockBlog.blogHeadline}
                    author={mockBlog.author}
                    blogDescription={mockBlog.blogDescription} />
            </BrowserRouter >
        )
    }
    beforeEach(() => {
        mockBlog = {
            id: "1",
            blogHeadline: 'Blog Headline 1',
            blogDescription: 'Blog Description 1',
            author: "x"
        }
    })

    it('should initially render', () => {
        setup();
    })
    it('should render with the right props', () => {
        setup();
        const blogCard = screen.getByTestId('blog-card');
        expect(blogCard).toHaveTextContent(mockBlog.blogHeadline);
        expect(blogCard).toHaveTextContent(mockBlog.blogDescription);
        expect(blogCard).toHaveTextContent(mockBlog.id);
        expect(blogCard).toHaveTextContent(mockBlog.author);
    });
    it("should trigger route change when (See More) Button is clicked", () => {
        setup();
        const button = screen.getByRole("button",{
            name: /See More/i
        });
        fireEvent.click(button);
        expect(window.location.pathname).toBe(`/blogs/${mockBlog.id}`);
        expect(window.location.pathname).not.toBe(`/blogs/${mockBlog.id+1}`);
    });
})
