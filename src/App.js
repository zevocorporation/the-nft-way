import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './patterns/header';
import Footer from './patterns/footer';
import Home from './screens/home';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
