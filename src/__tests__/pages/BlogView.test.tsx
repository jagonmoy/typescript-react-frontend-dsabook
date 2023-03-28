import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { BlogView } from '../../pages/blogs/BlogView';
// import { SingleBlogDetails } from '../../components/SingleBlogDetails';
// import { Navbar } from '../../components/Navbar';

describe('<BlogView />', () => {
    it('should render',() => {
        render(
            <BrowserRouter>
                {/* <BlogView /> */}
            </BrowserRouter>
        )
    }) 
    // type RouteBlogView = {
    //     id?: string
    // }
    // interface Blog {
    //     id: string;
    //     blogHeadline: string;
    //     blogDescription: string;
    //     author: string;
    // }
    // let mockBlogs: Blog[];
    // it('should render Navbar and SingleBlogDetails with correct props', async () => {
    //     const mockId = '1';
    //     render(
    //         <BrowserRouter>
    //             <BlogView />
    //         </BrowserRouter>

    //     );
    //     const { id } = useParams<RouteBlogView>();
    //     const arr = await screen.findAllByTestId('navbar')
    //     console.log(arr);
    //     // const navbarElement = getByTestId('navbar');
    //     // const singleBlogDetailsElement = getByTestId('single-blog-details');
    //     // // expect(navbarElement).toBeInTheDocument();
    //     // expect(singleBlogDetailsElement).toBeInTheDocument();
    //     // expect(singleBlogDetailsElement).toHaveAttribute('id', mockId);
    // });
});