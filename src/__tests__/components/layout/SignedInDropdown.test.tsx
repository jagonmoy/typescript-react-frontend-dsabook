import { screen,fireEvent} from '@testing-library/react';
import { SignedInDropdown } from '../../../components/layout/Navbar/SignedInDropdown';
import { renderWithProviders } from '../../../utils/test-utils';

describe('<SignedOutDropdown />', () => {
    it('test something',() => {
        
    })
    // it ('should have a button named AUTH',() => {
    //    renderWithProviders(<SignedInDropdown/>,{
    //     preloadedState: {
    //         blogs: {
    //             blogs: []
    //         },
    //         user: {
    //             status: true ,
    //             username: 'xyz'
    //         }
    //     }
    //    })
    //    const spy = jest.spyOn(console, 'log');
    //    const button = screen.getByRole('button',{name : /xyz/i })
    //    fireEvent.click(button);
    //    expect(spy).toHaveBeenCalledWith('Profile Menu Opened');      
    // })
    // it ('After Clicking the profile Button It should open a Menu',() => {
    //     renderWithProviders(<SignedInDropdown/>,{
    //         preloadedState: {
    //             blogs: {
    //                 blogs: []
    //             },
    //             user: {
    //                 status: true ,
    //                 username: 'xyz'
    //             }
    //         }
    //     })
    //     const button = screen.getByRole('button',{name : /xyz/i })
    //     fireEvent.click(button);
    //     const menu = screen.getByRole('menu')
    //     expect(menu.textContent).toContain('Sign out')
    //     expect(menu.textContent).toContain('Create Blog')
    //  })
    //  it ('After Clicking Sign out it should redirect to signin page,status should be false and username should be null',() => {
    //     const {store} = renderWithProviders(<SignedInDropdown/>,{
    //         preloadedState: {
    //             blogs: {
    //                 blogs: []
    //             },
    //             user: {
    //                 status: true ,
    //                 username: 'xyz'
    //             }
    //         }
    //     })
    //     const button = screen.getByRole('button',{name : /xyz/i })
    //     fireEvent.click(button);
    //     const signouttext = screen.getByTestId('sign-out-item');
    //     fireEvent.click(signouttext);
    //     expect(window.location.pathname).toBe('/sign-in');
    //     expect(store.getState().user.status).toBe(false)
    //     expect(store.getState().user.username).toBe('')

    //  })
    //  it ('After Clicking Create Blog it should redirect to Create Blog page',() => {
    //     const {store} = renderWithProviders(<SignedInDropdown/>,{
    //         preloadedState: {
    //             blogs: {
    //                 blogs: []
    //             },
    //             user: {
    //                 status: true ,
    //                 username: 'xyz'
    //             }
    //         }
    //     })
    //     const button = screen.getByRole('button',{name : /xyz/i })
    //     fireEvent.click(button);
    //     const createblogtext = screen.getByTestId('create-blog-item');
    //     fireEvent.click(createblogtext);
    //     expect(window.location.pathname).toBe('/create-blog');

    //  })
});
