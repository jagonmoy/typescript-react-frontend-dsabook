import { Home } from '../../../../components/blogs/Home/Home';
import { renderWithProviders } from '../../../../utils/test-utils';
import { server } from '../../../../mock/api/server'
import { rest } from 'msw'
import { fireEvent, screen, waitFor } from '@testing-library/react';


const apiData = [
  { blogHeadline: "Mark ZuckerbergMark ZuckerbergMark ZuckerbergMark ZuckerbergMark Zuckerberg", blogDescription: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd", author: 'xasas', id: 'hasdhajshdkajsd', createdAt: '2021-11-29T12:25:38.567+00:00', updatedAt: '2021-11-29T12:25:38.567+00:00' },
  { blogHeadline: "Elon Musk", blogDescription: "asdasdasdasd", author: 'yasdasd', id: 'asdasdasdasd', createdAt: '2021-11-29T12:27:05.608+00:00', updatedAt: '2021-12-08T19:46:46.505+00:00' }
  
]


describe('Home', () => {
  afterEach(()=>{
    jest.clearAllMocks()
  })
  
  it('renders loading button', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.json(apiData))
      }
      )
    );
    renderWithProviders(<Home />)
    expect(screen.getByTestId('loading-page')).toBeInTheDocument()

  });
  it('renders blogs after loading button', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.json(apiData))
      }
      )
    );
    renderWithProviders(<Home />)
    expect(screen.getByTestId('loading-page')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText('Elon Musk')).toBeInTheDocument()
    })

  });
  it('renders error page if there is error', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    renderWithProviders(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Error Fetching Data !')).toBeInTheDocument()
    })
    
  });

  it('renders create blog button only if a user is logged in and cliking it takes to create blog page', async () => {

    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.json(apiData))
      }
      )
    );
    renderWithProviders(<Home/>,{
          preloadedState: {
              user: {
                  username: 'xyz',
                  accessToken: 'xtz'
              }
          }
    })
    let createBlogText;
    await waitFor(() => {

      createBlogText = screen.getByText('Want to Create a Blog ?')
      expect(createBlogText).toBeInTheDocument();
      fireEvent.click(createBlogText);
      expect(window.location.pathname).toBe('/blog/create');
      
    })

  });

});
