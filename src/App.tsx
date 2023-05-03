import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/blogs/Home/Home';
import { BlogView } from './components/blogs/BlogView/BlogView';
import { CreateBlog } from './components/blogs/CreateBlog/CreateBlog';
import { SignIn } from './components/auth/SignIn/SignIn';
import { SignUp } from './components/auth/SignUp/SignUp';
import { ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/layout/Navbar/Navbar';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { selectUsername } from './slices/userSlice';
import { useAppSelector } from './app/hooks';
import { ErrorPage } from './components/generic/ErrorPage';

const App: FC = () => {
  const username = useAppSelector(selectUsername)
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <CssBaseline />
      <Navbar />
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/home"element={<Home/>} />
          <Route path="/blogs"element={<Home/>} />
          <Route path="/sign-in" element={ username? <Navigate to='/' /> : <SignIn/>}  />
          <Route path="/sign-up" element={ username? <Navigate to='/' /> : <SignUp/>} />
          <Route path="/blog/create" element={ username? <CreateBlog/> : <Navigate to='/' />} />
          <Route path="/blogs/:id"element={<BlogView/>} />
          <Route path='*'element={<ErrorPage message='404 Not Found'/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;