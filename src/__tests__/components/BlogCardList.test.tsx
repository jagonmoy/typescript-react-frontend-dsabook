/* eslint-disable testing-library/no-node-access */
import { BrowserRouter } from "react-router-dom";
import { BlogCardList } from "../../components/BlogCardList";
import { render, screen } from "@testing-library/react";
describe('<BlogCardList />', () => {
    interface Blog {
        id: string;
        blogHeadline: string;
        blogDescription: string;
        author: string;
    }
    let mockBlogs: Blog[];
    const setup = () : void => {
        render(
            <BrowserRouter>
                <BlogCardList blogs={mockBlogs} />
            </BrowserRouter >
        )
    }
    beforeEach(() => {
        mockBlogs = [
            { id: "1", blogHeadline: 'Blog Headline 1', blogDescription: 'Blog Description 1', author: "x" },
            { id: "2", blogHeadline: 'Blog Headline 2', blogDescription: 'Blog Description 2', author: "y" },
            { id: "3", blogHeadline: 'Blog Headline 3', blogDescription: 'Blog Description 3', author: "z" },
        ];
    })

    it('should initially render', () => {
        setup();
    })
    it('should render with the right props', () => {
        setup();
        const blogCardList = screen.getByTestId('blog-card-list');
        expect(blogCardList.children.length).toBe(mockBlogs.length);
        mockBlogs.forEach((blog, index) => {
            expect(blogCardList.children[index]).toHaveTextContent(blog.blogHeadline);
            expect(blogCardList.children[index]).toHaveTextContent(blog.blogDescription);
            expect(blogCardList.children[index]).toHaveTextContent(blog.id);
            expect(blogCardList.children[index]).toHaveTextContent(blog.author);
        });
    });
})
