import { BlogInterface } from '../../../../models/blogModel';
import Router from "react-router-dom";
import { renderWithProviders } from '../../../../utils/test-utils';
import { BlogView } from '../../../../components/blogs/BlogView/BlogView';
import { screen } from '@testing-library/react';
import { BlogViewContent } from '../../../../components/blogs/BlogView/BlogViewContent';
import { BlogViewEdit } from '../../../../components/blogs/BlogView/BlogViewEdit';
import { BlogViewDelete } from '../../../../components/blogs/BlogView/BlogViewDelete';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));


jest.mock('../../../../components/blogs/BlogView/BlogViewContent', () => ({
    BlogViewContent: jest.fn(),
}));
jest.mock('../../../../components/blogs/BlogView/BlogViewEdit', () => ({
    BlogViewEdit: jest.fn(),
}));
jest.mock('../../../../components/blogs/BlogView/BlogViewDelete', () => ({
    BlogViewDelete: jest.fn(),
}));


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
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render BlogView Component', () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        renderWithProviders(<BlogView />, {
            preloadedState: {
                user: {
                    username: 'John Doe',
                    status: true
                },
                blogs: {
                    blogs: mockBlogs
                }
            }
        })
        
    })
    it('should have BlogViewContent,BlogViewEdit and BlogViewDelete Component', () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
        const { store } = renderWithProviders(<BlogView />, {
            preloadedState: {
                user: {
                    username: 'John Doe',
                    status: true
                },
                blogs: {
                    blogs: mockBlogs
                }
            }
        })
        expect(BlogViewContent).toBeCalledWith({
            blogHeadline: mockBlogs[0].blogHeadline,
            blogDescription: mockBlogs[0].blogDescription,
            id: mockBlogs[0].id,
            author: store.getState().user.username
        }, {}
        )
        expect(BlogViewEdit).toBeCalledWith({
            blogHeadline: mockBlogs[0].blogHeadline,
            blogDescription: mockBlogs[0].blogDescription,
            id: mockBlogs[0].id,
            author: store.getState().user.username,
            setBlogHeadline: expect.any(Function),
            setBlogDescription: expect.any(Function)
        }, {}
        )
        expect(BlogViewDelete).toBeCalledWith({
            id: mockBlogs[0].id,
        }, {}
        )
    })

});
