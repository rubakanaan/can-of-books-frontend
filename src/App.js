import React from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';
import Login from './Login';
import LogoutButton from './LogoutButton';
import Footer from './Footer';
import Profile from './Profile';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isAuth:this.props.auth0.isAuthenticated,
    }
  }
  render() {
    console.log('app', this.props)
    return (
      <div>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}

                <Login />
                {this.state.isAuth && (
                  <div>
                    <MyFavoriteBooks />
                    <LogoutButton/>  
                  </div>
                )}
               
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Profile />
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);
