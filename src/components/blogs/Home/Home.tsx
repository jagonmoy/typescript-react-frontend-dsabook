import { FC } from 'react';
import { LoadingPage } from '../../generic/LoadingPage';
import { useGetAllBlogsQuery } from '../../../slices/apiSlice';
import { BlogCardList } from './BlogCardList'
import { BlogCreateButton } from './BlogCreateButton';
import { useAppSelector } from '../../../app/hooks';
import { selectUsername } from '../../../slices/userSlice';
import { ErrorPage } from '../../generic/ErrorPage';


export const Home: FC = () => {
  const { data = [], isLoading,isError} = useGetAllBlogsQuery();
  const username = useAppSelector(selectUsername);
  if(isError) return <ErrorPage message={'Error Fetching Data !'}/>
  if (isLoading) return <LoadingPage />;
  return (
    <div>
      {username && <BlogCreateButton />}
      <BlogCardList data={data}/>
    </div>);
};