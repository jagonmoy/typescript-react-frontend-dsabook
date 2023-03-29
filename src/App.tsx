import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogView } from './pages/blogs/BlogView';
import { CreateBlog } from './pages/blogs/CreateBlog';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/blogs" Component={Home} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/create-blog" Component={CreateBlog} />
          <Route path="/blogs/:id" Component={BlogView} />
          <Route path="/users" Component={BlogView} />
          <Route path='*' Component={NotFound}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;