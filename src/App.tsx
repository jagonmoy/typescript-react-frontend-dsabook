import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import { BlogView } from './pages/BlogView';
import { CreateBlog } from './pages/CreateBlog';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/blogs" Component={Home} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/create-blog" Component={CreateBlog} />
        <Route path="/blogs/blog-view" Component={BlogView} />
        <Route path='*'Component={NotFound}></Route>
      </Routes>
    </Router>
  );
};

export default App;