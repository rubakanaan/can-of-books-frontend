import React from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';
import Login from './Login';
import Footer from './Footer';
import Profile from './Profile';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
               
                {isAuthenticated ?<MyFavoriteBooks /> : <Login /> }

              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {isAuthenticated && <Profile />}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);
