import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar';
import Createpost from './CreatePost';
import Posts from './Posts';
import PostList from './PostList';
import PostDetail from './PostDetail';

// const FallBack = (props) => {
//   return <div> URL Not found</div>;
//   <Route component={FallBack} />
// };

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/postlist" component={PostList} />
        <Route path="/createpost" component={Createpost} />
        <Route path="/post/:postId" component={PostDetail} />
      </Switch>
    </Router>

  );
};

export default App;
