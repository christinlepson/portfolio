/* eslint-disable import/no-named-as-default */
import React from "react";
import {Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import {ProjectsPage, ResumePage, ContactPage, Navigation} from '../components';
import {useScript} from '../hooks';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => {

  useScript('https://kit.fontawesome.com/dd328737b6.js');
  return (
    <div className={'site-container'}>
      <Navigation/>
      <div className={'content-container'}>
        <Switch>
          <Route exact path="/" component={ProjectsPage}/>
          <Route path="/resume" component={ResumePage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
