import React from 'react';
import LoginFormContainer from "./loginsignin/login_form_container";
import SignupFormContainer from "./loginsignin/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from "./loginsignin/navbar/navbar_container";
import Footer from "./footer/footer";
import Splash from "./splash/splash_container";
import BusinessShow from './businesses/business_show_container';
import ReviewForm from './businesses/reviews/create_review_container';
import BusinessIndex from './businesses/allBusiness_container'

const App = () => (
    <div>
        <header>
            < Navbar />
        </header>
        <Switch>
            < AuthRoute exact path="/login" component={LoginFormContainer} />
            < AuthRoute exact path="/signup" component={SignupFormContainer} />
            < Route path="/reviews" component={ReviewForm} />
            < Route path='/api/businesses/:id' component={BusinessShow} />
            < Route path='/businesses/all' component={BusinessIndex} />
            < Route exact to="/" component={Splash} />
        </Switch>
        < Footer />
    </div>
);

export default App;