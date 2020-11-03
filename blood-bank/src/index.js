import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Nav from './Component/Nav'
import Navbar from './Component/navbar'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Component/Footer'

import { CircularProgress } from '@material-ui/core';



const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Donates = lazy(() => import('./Pages/Donation'));
const Registered = lazy(() => import('./Pages/Registered'));
const Request = lazy(() => import('./Pages/Requested'));




const renderLoader = () => <div className="loader">  <CircularProgress color="secondary" /></div>;







const Abouts = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <About />

      </Suspense>
      <Footer />

    </div>
  )

}
const Donatess = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <Donates />

      </Suspense>
      <Footer />

    </div>
  )

}
const Requested = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <Request />

      </Suspense>
      <Footer />

    </div>
  )

}
const Registeredfnc = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <Registered />

      </Suspense>
      <Footer />

    </div>
  )

}



const Contacts = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <Contact />

      </Suspense>
      <Footer />
    </div>
  )

}


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {/* Using the `component` prop */}
        <Route exact path="/" component={App} />

        {/* Using the `render` prop */}
        <Route
          path="/About" component={Abouts}
        />
        <Route
          path="/Contact" component={Contacts}
        />
        <Route
          path="/Registered" component={Registeredfnc}
        />
        <Route
          path="/Requested" component={Requested}
        />
        <Route
          path="/Donation" component={Donatess}
        />

        <Route
          path="/Whatsapp"

          component={Registeredfnc}
        />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
