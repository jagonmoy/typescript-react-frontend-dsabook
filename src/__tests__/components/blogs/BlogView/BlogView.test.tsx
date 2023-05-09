import { BlogView } from '../../../../components/blogs/BlogView/BlogView';
import { renderWithProviders } from '../../../../utils/test-utils';
import { server } from '../../../../mock/api/server'
import { rest } from 'msw'
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Router from "react-router-dom";


const apiData = { blogHeadline: "Elon Musk", blogDescription: "asdasdasdasd", author: 'xyz', id: 'asdasdasdasd', createdAt: '2021-11-29T12:27:05.608+00:00', updatedAt: '2021-12-08T19:46:46.505+00:00' }

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

describe('BlogView', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders loading button', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
        renderWithProviders(<BlogView />)
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()

    });
    it('renders  BlogViewContent component', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
        renderWithProviders(<BlogView />)
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()

        await waitFor(()=> {
            expect(screen.getByTestId('blog-view-content-testid')).toBeInTheDocument()
        })

    });
    it('renders error page if there is error', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            }
            )
        );
    
        renderWithProviders(<BlogView />)
        await waitFor(() => {
          expect(screen.getByText('Error Fetching Data !')).toBeInTheDocument()
        })
        
      });
      it('If logged in user and blog author is same then BlogViewContent and BlogViewDelete component is rendered', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
        renderWithProviders(<BlogView/>,{
            preloadedState: {
                user: {
                    username: 'xyz',
                    accessToken: 'xtz'
                }
            }
      })
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()

        await waitFor(()=> {
            expect(screen.getByTestId('edit-delete-action')).toBeInTheDocument()
        })

    });
    it('should open a dialog after clicking delete icon', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
        renderWithProviders(<BlogView/>,{
            preloadedState: {
                user: {
                    username: 'xyz',
                    accessToken: 'xtz'
                }
            }
      })
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()

       
        await waitFor(()=> {
            const deleteButton = screen.getByTestId('delete-button')
            expect(deleteButton).toBeInTheDocument();
            fireEvent.click(deleteButton);
            expect(screen.getByTestId('dialog-actions')).toBeInTheDocument();
            expect(screen.getByTestId('dialog-actions-title')).toBeInTheDocument()
            expect(screen.getByTestId('yes-button')).toBeInTheDocument()
            expect(screen.getByTestId('no-button')).toBeInTheDocument()
            
        })

    });
    it('should open a dialog after clicking delete icon', async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' })
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
        renderWithProviders(<BlogView/>,{
            preloadedState: {
                user: {
                    username: 'xyz',
                    accessToken: 'xtz'
                }
            }
      })
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()

       
        await waitFor(()=> {
            const editButton = screen.getByTestId('edit-button')
            expect(editButton).toBeInTheDocument();
            fireEvent.click(editButton);
            expect(screen.getByTestId('dialog-edit')).toBeInTheDocument();
            expect(screen.getByTestId('dialog-edit-title')).toBeInTheDocument()
            expect(screen.getByTestId('headline-description-fields')).toBeInTheDocument()
            expect(screen.getByTestId('dialog-actions-edit')).toBeInTheDocument()
            
        })
    });
  
});
