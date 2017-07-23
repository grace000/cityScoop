// Include the React library
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-router module
const router = require("react-router");

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
const Router = router.Router;

const browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference the high-level components
const App = require("../App");
const City = require("./components/City/City");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      {/* If user selects city or member show the appropriate component */}
      <Route path="city" component={City} />

      {/* If user selects any other path... we get the city Route */}
      <IndexRoute component={City} />

    </Route>
  </Router>

);