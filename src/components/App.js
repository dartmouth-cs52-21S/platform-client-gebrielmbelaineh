import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar';
import Createpost from './CreatePost';
import Posts from './Posts';
import PostDetail from './PostDetail';
import SignIn from './signin';
import SignUp from './signup';
import PrivateRoute from './privateRoute';

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
        <PrivateRoute path="/createpost" component={Createpost} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>

  );
};

export default App;
