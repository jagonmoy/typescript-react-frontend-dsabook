import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/blogs/Home/Home';
import { BlogView } from './components/blogs/BlogView/BlogView';
import { CreateBlog } from './components/blogs/CreateBlog/CreateBlog';
import { NotFound } from './components/miscellaneous/NotFound/NotFound';
import { SignIn } from './components/auth/SignIn/SignIn';
import { SignUp } from './components/auth/SignUp/SignUp';
import { ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/layout/Navbar/Navbar';
import { CssBaseline } from '@mui/material';
import { ErrorPage } from './components/generic/ErrorPage';
import theme from './theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <CssBaseline />
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/blogs" Component={Home} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/create-blog" Component={CreateBlog} />
          <Route path="/blogs/:id" Component={BlogView} />
          <Route path='*' Component={NotFound}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;