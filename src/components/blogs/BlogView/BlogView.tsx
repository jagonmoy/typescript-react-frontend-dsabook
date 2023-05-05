import React, { useState, useEffect } from 'react';
import { BlogID } from '../../../models/blogModel';
import { useParams } from 'react-router-dom';
import { RootContainer, BasicGrid } from './BlogView.style';
import { BlogViewContent } from './BlogViewContent';
import { BlogViewDelete } from './BlogViewDelete';
import { BlogViewEdit } from './BlogViewEdit';
import { useGetBlogQuery } from '../../../slices/apiSlice';
import { selectUsername } from '../../../slices/userSlice';
import { useAppSelector } from '../../../app/hooks';
import { LoadingPage } from '../../generic/LoadingPage';
import { ErrorPage } from '../../generic/ErrorPage';
import { convertToReadableTime } from '../../../utils/convertTime'

export const BlogView: React.FC = () => {
  const { id } = useParams<BlogID>();
  const currentUser: string = useAppSelector(selectUsername);

  const { data, isSuccess, isLoading } = useGetBlogQuery(id)


  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    if (isSuccess) {
      setHeadline(data.blogHeadline);
      setDescription(data.blogDescription);
    }
  }, [isSuccess, data?.blogHeadline, data?.blogDescription]);

  if (isLoading) return <LoadingPage />
  else if (isSuccess) {
    const { blogHeadline, blogDescription } = data
    const creationTime = convertToReadableTime(data.createdAt);
    const updatedTime = convertToReadableTime(data.updatedAt);
    return (<div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>

          <BlogViewContent blogHeadline={blogHeadline} blogDescription={blogDescription} author={data.author} id={id} createdAt={creationTime} updatedAt={updatedTime} />

          {currentUser === data.author && (
            <div data-testid='edit-delete-action'>
              <BlogViewDelete id={id} />
              <BlogViewEdit
                blogHeadline={headline}
                blogDescription={description}
                setBlogHeadline={e => setHeadline(e.target.value)}
                setBlogDescription={e => setDescription(e.target.value)}
                id={id}
                author={data.author}
              />
            </div>
          )}

        </BasicGrid>
      </RootContainer>
    </div>)
  }
  else return <ErrorPage message='Error Fetching Data !' />
}
