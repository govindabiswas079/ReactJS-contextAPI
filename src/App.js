/* import React from 'react'
import Carousel from 'react-images'
import Marquee from "react-fast-marquee";

const images = [{ source: 'https://thumbs.dreamstime.com/z/teamwork-group-friends-logo-image-holding-each-other-39918563.jpg' }, { source: 'https://files.123freevectors.com/wp-content/uploads/freevectorart/best-friends-logo-free-vector.jpg' }]

const App = () => {
  return (
    <div>
      <Marquee>
        <Carousel views={images} />
      </Marquee>
    </div>
  )
}

export default App */


import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, AddEmployee, EditEmployee } from './components/index';

import { GlobalProvider } from './context/GlobalState';

const App = () => {

  return (
    <GlobalProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={AddEmployee} />
            <Route exact path='/edit/:id' component={EditEmployee} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  )
}

export default App
