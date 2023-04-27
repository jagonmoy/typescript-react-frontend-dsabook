import { screen, fireEvent } from '@testing-library/react';
import { CreateBlog } from '../../../components/blogs/CreateBlog/CreateBlog';
import { renderWithProviders } from '../../../utils/test-utils';


describe('<SignIn />', () => {
    const setup = () => renderWithProviders(<CreateBlog/>)
    it('should initially render', () => {
        setup();
    })
    // it('should have BLOG HEADLINE, BLOG DESCRIPTION and POST in the document', () => {
    //     setup()
    //     expect(screen.getByText('BlOG HEADLINE')).toBeInTheDocument();
    //     expect(screen.getByText('BlOG DESCRIPTION')).toBeInTheDocument();
    //     expect(screen.getByText('POST')).toBeInTheDocument();
    // })
    // it('checking BlOG HEADLINE field', () => {
    //     setup();
    //     const blogHeadlineInput: any = screen.getByTestId('blog-headline-testid');
    //     expect(blogHeadlineInput).toHaveAttribute("rows", "4")
    //     expect(blogHeadlineInput.value).toEqual("");
    //     expect(blogHeadlineInput.value).not.toEqual("a     ");
    //     fireEvent.change(blogHeadlineInput, { target: { value: 'testing' } });
    //     expect(blogHeadlineInput.value).toEqual('testing');
    //     expect(blogHeadlineInput.value).not.toEqual('t');
    // })
    // it('checking BlOG DESCRIPTION field', () => {
    //     setup();
    //     const blogDescriptionInput: any = screen.getByTestId('blog-description-testid');
    //     expect(blogDescriptionInput).toHaveAttribute("rows", "30")
    //     expect(blogDescriptionInput.value).toEqual("");
    //     expect(blogDescriptionInput.value).not.toEqual("a     ");
    //     fireEvent.change(blogDescriptionInput, { target: { value: 'testing' } });
    //     expect(blogDescriptionInput.value).toEqual('testing');
    //     expect(blogDescriptionInput.value).not.toEqual('t');
    // })
    // it('should be able to submit headline and description', () => {
    //     setup();

    //     const blogHeadlineInput: any = screen.getByTestId('blog-headline-testid');
    //     fireEvent.change(blogHeadlineInput, { target: { value: 'test headline' }});

    //     const blogDescriptionInput: any = screen.getByTestId('blog-description-testid');
    //     fireEvent.change(blogDescriptionInput, { target: { value: 'test description' }});
    
    //     fireEvent.click(screen.getByTestId('sign-in-submit'));
    //     expect(window.location.pathname).toBe('/')

    // })
    // it('Check initial state before post and states after post', () => {
    //     const {store} = renderWithProviders(<CreateBlog/>)

    //     const blogHeadlineInput: any = screen.getByTestId('blog-headline-testid');
    //     const blogDescriptionInput: any = screen.getByTestId('blog-description-testid');

    //     fireEvent.click(screen.getByTestId('sign-in-submit'));
        
    //     expect(store.getState().blogs.blogs).toEqual([])
       
    //     fireEvent.change(blogHeadlineInput, { target: { value: 'test headline' }});
    //     fireEvent.change(blogDescriptionInput, { target: { value: 'test description' }});
        

    //     fireEvent.click(screen.getByTestId('sign-in-submit'));
    
    //     expect(store.getState().blogs.blogs).toHaveLength(1)
    //     expect(store.getState().blogs.blogs[0]).toHaveProperty('blogHeadline')
    //     expect(store.getState().blogs.blogs[0].blogHeadline).toEqual('test headline')
    //     expect(store.getState().blogs.blogs[0]).toHaveProperty('blogDescription')
    //     expect(store.getState().blogs.blogs[0].blogDescription).toEqual('test description')
    //     expect(store.getState().blogs.blogs[0]).toHaveProperty('author')
    //     expect(store.getState().blogs.blogs[0]).toHaveProperty('id')

    // })
});
