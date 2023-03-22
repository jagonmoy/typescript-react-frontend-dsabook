import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../../src/pages/Home';
import Blogs from '../../src/data/blogs.json';

describe('Home Component', () => {
    test('Check blogCard and blogCardList', () => {
        render(<Home />);

        const blogCardList = screen.getAllByTestId('blog-card-list');
        expect(blogCardList).toHaveLength(1);

        const blogCard = screen.getAllByTestId('blog-card')
        expect(blogCard).toHaveLength(3);
    });
    test('Checking Blog Hedlines',() => {
        render(<Home />);
        const headers = screen.getAllByRole('heading');
        expect(headers).toHaveLength(6);
        const blogTitles = Blogs.map((blog) => blog.blogHeadline);
        blogTitles.forEach((title) => {
            const blogTitle = screen.getByText(title);
            expect(blogTitle).toBeInTheDocument();
        });
    })
    test('Checking Blog Description',() => {
        render(<Home />);
        
        const blogTitles = Blogs.map((blog) => blog.blogDescription);
        blogTitles.forEach((title) => {
            const blogTitle = screen.getByText(title);
            expect(blogTitle).toBeInTheDocument();
        });
    })

});

