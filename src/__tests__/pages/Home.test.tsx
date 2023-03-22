import { render, fireEvent } from '@testing-library/react';
import { Home } from '../../pages/Home';
import { BlogCardList } from '../../components/BlogCardList';
import { BrowserRouter } from 'react-router-dom';

describe('Home Page', () => {
    it('should have one Navbar component', () => {
        const { queryAllByTestId } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>);
        const navbar = queryAllByTestId('navbar');
        expect(navbar).toHaveLength(1);
    });

    it('should contain one BlogCardList', () => {
        const {queryAllByTestId  } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>);
        const blogCardlist =queryAllByTestId ('blog-card-list');
        expect(blogCardlist).toHaveLength(1);
    });
    it('should render with the right props', () => {
        const mockBlogs = [
          { id: "1", blogHeadline: 'Blog 1', blogDescription: 'Content 1',author: "x" },
          { id: "2", blogHeadline: 'Blog 2', blogDescription: 'Content 2',author: "x" },
          { id: "3", blogHeadline: 'Blog 3', blogDescription: 'Content 3',author: "x"},
        ];
        const { getByTestId } = render(<BrowserRouter><BlogCardList blogs={mockBlogs} /></BrowserRouter>);
        const blogCardList = getByTestId('blog-card-list');
        expect(blogCardList.children.length).toBe(mockBlogs.length);
        mockBlogs.forEach((blog, index) => {
          expect(blogCardList.children[index]).toHaveTextContent(blog.blogHeadline);
          expect(blogCardList.children[index]).toHaveTextContent(blog.blogDescription);
          expect(blogCardList.children[index]).toHaveTextContent(blog.id);
          expect(blogCardList.children[index]).toHaveTextContent(blog.author);
        });
      });
});
