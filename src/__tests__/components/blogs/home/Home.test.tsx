import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../../../../components/blogs/Home/Home';
import { useGetAllBlogsQuery } from '../../../../api/apiSlice';
import { renderWithProviders } from '../../../../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
// import {}
// Mock the useGetAllBlogsQuery hook
jest.mock('../../../../api/apiSlice', () => ({
  useGetAllBlogsQuery: jest.fn(() => ({
    data: [
      { id: 1, title: 'Blog 1', content: 'Blog 1 content' },
      { id: 2, title: 'Blog 2', content: 'Blog 2 content' },
    ],
    isLoading: false,
  })),
}));

describe('Home', () => {
  it('renders the blog card list', () => {
    console.log(useGetAllBlogsQuery()?.data)
    render(<BrowserRouter><Provider store={store}><Home/></Provider></BrowserRouter>)
  
    // const blogCards = screen.getAllByRole('article');
    // expect(blogCards).toHaveLength(2);
  });

  // it('renders the loading page when loading', () => {
  //   jest.spyOn(require('@reduxjs/toolkit/query/react'), 'useQuery').mockImplementation(() => ({ isLoading: true }));

  //   render(<Home />);

  //   const loadingPage = screen.getByRole('status');
  //   expect(loadingPage).toBeInTheDocument();
  // });
});
