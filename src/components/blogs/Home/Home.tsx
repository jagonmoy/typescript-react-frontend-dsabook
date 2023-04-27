import { FC } from 'react';
import { LoadingPage } from '../../generic/LoadingPage';
import { useGetAllBlogsQuery } from '../../../api/apiSlice';
import { BlogCardList } from './BlogCardList'
import { BlogCreateButton } from './BlogCreateButton';
import { useAppSelector } from '../../../app/hooks';
import { selectUsername } from '../../../slices/userSlice';

export const Home: FC = () => {
  const { data = [], isLoading } = useGetAllBlogsQuery();
  const username = useAppSelector(selectUsername)

  if (isLoading) return <LoadingPage />;
  return (
    <div>
      {username && <BlogCreateButton />}
      <BlogCardList data={data} />
    </div>);
};