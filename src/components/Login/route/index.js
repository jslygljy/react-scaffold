/* 
*  
*/
import React from "react";
import {Route} from "react-router";
import {
  Dummy
} from 'orderpick/components';
import {
    List
} from '../containers';
import Detail from 'bundle-loader?lazy!../containers'

export default (
  <Switch>
    <Route
        exact strict
        path='/List'
        render={props => (
        <Redirect {...this.props} to='/List' />
        )}
    />
    <Route
        path='/Detail'
        render={props => (
        <RouteBundle load={Detail} {...this.props} />
        )}
    />
  </Switch>
);
