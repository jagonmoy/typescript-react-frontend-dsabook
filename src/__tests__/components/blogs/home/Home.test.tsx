import { screen } from '@testing-library/react';
import { Home } from '../../../../components/blogs/Home/Home';
import { BlogInterface } from '../../../../models/blogModel';
import { renderWithProviders } from '../../../../utils/test-utils';

describe('<Home />', () => {
  const mockBlogs: BlogInterface[] = [
    {
      id: "1",
      blogHeadline: 'Blog 1',
      author: 'John Doe',
      blogDescription: 'Description 1'
    },
    {
      id: "2",
      blogHeadline: 'Blog 2',
      author: 'Jane Doe',
      blogDescription: 'Description 2'
    }
  ];

  it('renders a list of blog cards if blogs array is not empty and list length should be blogs array length', () => {
    renderWithProviders(<Home />,{preloadedState: {
        blogs: {
            blogs: mockBlogs
        }
    }});
    mockBlogs.forEach((blog) => {
      expect(screen.getByText(blog.blogHeadline)).toBeInTheDocument();
      expect(screen.getByText(blog.author)).toBeInTheDocument();
      expect(screen.getByText(blog.blogDescription)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('blog-card-testid')).toHaveLength(2)
  });

  it('renders no blog cards if there are no blogs', () => {
    renderWithProviders(<Home />);
    expect(screen.queryAllByTestId('blog-card-testid')).toHaveLength(0)
  });

});
