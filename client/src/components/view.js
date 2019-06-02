import React, { Component } from 'react'
import Customers from './customers/customers'
import ProjectApi from './ProjectApi'
import Hem from './Hem'
import AxiosApi from './AxiosApi'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
class View extends Component {

    
    render() {
        return (
            <BrowserRouter>
            <div>
              <Switch>
              <Route exact path="/Customers" component={Customers}/>
              <Route exact path="/ProjectApi" component={ProjectApi}/>
              <Route exact path="/Hem" component={Hem}/>
              <Route exact path="/AxiosApi" component={AxiosApi}/>
              </Switch>
            </div>
            </BrowserRouter> 
  );
        
}
}


export default View
