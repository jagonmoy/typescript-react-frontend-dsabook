import { Home } from '../../../../components/blogs/Home/Home';
import { renderWithProviders } from '../../../../utils/test-utils';
import {server} from '../../../../mock/api/server'
import {rest} from 'msw'
import { screen, waitFor } from '@testing-library/react';

const apiData = [
  {blogHeadline: "Mark Zuckerberg", blogDescription: "asdasdasdasd", author: 'xasas', id: 'hasdhajshdkajsd' },
  {blogHeadline: "Elon Musk", blogDescription: "asdasdasdasd" , author: 'yasdasd', id: 'asdasdasdasd'}
]

describe('Home', () => {
  server.use(
    rest.get('http://localhost:3010/api/blogs', (req, res, ctx) => {
      return res(ctx.json(apiData))
    }
    )
  );
  it('renders the blog card list',async () => {
   
    renderWithProviders(<Home/>)
  
    await waitFor(()=>{
      expect(screen.getByText('Elon Musk')).toBeInTheDocument()
    })
  
  });
});
// describe('Home', () => {
//   it('renders the blog card list',async () => {
   
//     renderWithProviders(<Home/>)
  
//     await waitFor(()=>{
//       expect(screen.getByText('Elon Musk')).toBeInTheDocument()
//     })
  
//   });
// });
// describe('renders error messsage if API fails fetching data', async () => {
//   // server.use(
//   //     rest.get('http://localhost:3010/api/blogs', (req, res, ctx) => {
//   //       res.once(ctx.status(500), ctx.json({message: "baby, there was an error"})) 
//   //     }
//   //     )
//   // );

//   // renderWithProviders(<Home/>)
//   // const errorMessage = await screen.findByText('Error Fetching Data !');

// })