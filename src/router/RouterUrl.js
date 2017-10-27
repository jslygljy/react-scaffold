import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Routes from 'containers/route';

export default class RouterUrl extends Component{

    render(){
        return( 
                <Switch>
                    <Route exact path="/" component={Routes.get('Buttons').component}/>
                    <Route path='/ui/buttons' component={Routes.get('Buttons').component}/>
                    <Route path='/ui/icons' component={Routes.get('Icons').component}/>
                    <Route path='/ui/dropdown' component={Routes.get('DropdownMenu').component}/>
                    <Route path='/ui/pageination' component={Routes.get('Pageination').component}/>
                </Switch>
        )
    }
}