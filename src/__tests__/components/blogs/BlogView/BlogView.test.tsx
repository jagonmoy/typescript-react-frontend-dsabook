import React from 'react';
import { Blog } from '../../../../models/blogModel';
import Router from "react-router-dom";
import { renderWithProviders } from '../../../../utils/test-utils';
import { BlogView } from '../../../../components/blogs/BlogView/BlogView';
import { screen,fireEvent } from '@testing-library/react';
import { BlogViewContent } from '../../../../components/blogs/BlogView/BlogViewContent';
import { BlogViewEdit } from '../../../../components/blogs/BlogView/BlogViewEdit';
import { BlogViewDelete } from '../../../../components/blogs/BlogView/BlogViewDelete';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));


jest.mock('../../../../components/blogs/BlogView/BlogViewContent', () => ({
   BlogViewContent: jest.fn()
}));
// jest.mock('../../../../components/blogs/BlogView/BlogViewEdit', () => ({
//     BlogViewEdit: jest.fn(),
// }));
jest.mock('../../../../components/blogs/BlogView/BlogViewDelete', () => ({
    BlogViewDelete: jest.fn(),
}));


describe('<Home />', () => {
    const mockBlogs: Blog[] = [
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
    it('check something',()=> {
        
    })

    // it('should render BlogView Component', () => {
    //     jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
    //     renderWithProviders(<BlogView />, {
    //         preloadedState: {
    //             user: {
    //                 username: 'John Doe',
    //                 status: true
    //             },
    //             blogs: {
    //                 blogs: mockBlogs
    //             }
    //         }
    //     })
        
    // })
    // it('should have BlogViewContent Component', () => {
    //     jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
    //     const { store } = renderWithProviders(<BlogView />, {
    //         preloadedState: {
    //             user: {
    //                 username: 'John Doe',
    //                 status: true
    //             },
    //             blogs: {
    //                 blogs: mockBlogs
    //             }
    //         }
    //     })
    //     expect(BlogViewContent).toBeCalledWith({
    //         blogHeadline: mockBlogs[0].blogHeadline,
    //         blogDescription: mockBlogs[0].blogDescription,
    //         id: mockBlogs[0].id,
    //         author: store.getState().user.username
    //     },{}
    //     )
    //     // expect(BlogViewDelete).toBeCalledWith({
    //     //     id: mockBlogs[0].id,
    //     // }, {}
    //     // )
    // })
    // it('should have BlogViewEdit Component', () => {
    //     const mockSetBlogHeadline = jest.fn();
    //     const mockSetBlogDescription = jest.fn();
    //     renderWithProviders(<BlogViewEdit
    //         blogHeadline="Blog 1"
    //         blogDescription="Description 1"
    //         setBlogHeadline={mockSetBlogHeadline}
    //         setBlogDescription={mockSetBlogDescription}
    //         id="1"
    //         author="John Doe"
    //     />);
    //     expect(mockSetBlogHeadline).toHaveBeenCalledTimes(0);
    //     expect(mockSetBlogDescription).toHaveBeenCalledTimes(0);
    //     fireEvent.click(screen.getByTestId('edit-button'))
    //     // fireEvent.change(screen.getByTestId('blog-headline-input'), { target: { value: 'New Blog Headline' }});
    //     fireEvent.change(screen.getByTestId('blog-description-input'), { target: { value: 'New Blog Description' }});

        

    //     // expect(BlogViewEdit).toBeCalledWith({
    //     //     blogHeadline: mockBlogs[0].blogHeadline,
    //     //     blogDescription: mockBlogs[0].blogDescription,
    //     //     id: mockBlogs[0].id,
    //     //     author: store.getState().user.username,
    //     //     setBlogHeadline: setHeadline,
    //     //     // setBlogDescription: setStateBlogDescription
    //     // }, {}
    //     // )
    //     // expect(BlogViewDelete).toBeCalledWith({
    //     //     id: mockBlogs[0].id,
    //     // }, {}
    //     // )
    // })

});
