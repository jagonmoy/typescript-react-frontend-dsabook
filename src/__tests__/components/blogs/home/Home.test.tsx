import { Home } from '../../../../components/blogs/Home/Home';
import { renderWithProviders } from '../../../../utils/test-utils';
import {server} from '../../../../mock/api/server'
import {rest} from 'msw'
import { screen, waitFor } from '@testing-library/react';

const apiData = [
  {name: "Mark Zuckerberg", age: "34"},
  {name: "Elon Musk", age: "44"}
]

describe('Home', () => {

  server.use(
    rest.get(`http://localhost:3000/api/blogs`, (req, res, ctx) => {
        return res(ctx.json(apiData))         
      }
    ) 
    );

  it('renders the blog card list',async () => {
    renderWithProviders(<Home/>)
  
    await waitFor(()=>{
      expect(screen.findByText('Elon Musk')).tobe('Elon Musk')
    })
  });

});
