import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './patterns/header';
import Home from './screens/home';
import NotFoundPage from './screens/notFoundPage'

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
