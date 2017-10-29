import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
// 异步引入
import {Bundle} from 'Modebase'


const Buttons = (props) => (
    <Bundle load={(cb) => {
            require.ensure([], require => {
                cb(require('containers/Buttons/containers').default);
            },'Buttons');
        }}>
        {(Buttons) => <Buttons {...props}/>}
    </Bundle>
);

const Icons = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('containers/Icons/containers').default);
        },'Icons');
    }}>
        {(Icons) => <Icons {...props}/>}
    </Bundle>
);

const DropdownMenu = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('containers/DropdownMenu/containers').default);
        },'DropdownMenu');
    }}>
        {(DropdownMenu) => <DropdownMenu {...props}/>}
    </Bundle>
);

const Pageination = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('containers/Pageination/containers').default);
        },'Pageination');
    }}>
        {(Pageination) => <Pageination {...props}/>}
    </Bundle>
);


export default class RouterUrl extends Component{

    render(){
        return(
                <Switch>
                    <Route exact path="/" component={Buttons}/>
                    <Route path='/ui/buttons' component={Buttons}/>
                    <Route path='/ui/icons' component={Icons}/>
                    <Route path='/ui/dropdown' component={DropdownMenu}/>
                    <Route path='/ui/pageination' component={Pageination}/>
                </Switch>
                // <Switch>
                //     <Route exact path="/" component={Routes.get('Buttons').component}/>
                //     <Route path='/ui/buttons' component={Routes.get('Buttons').component}/>
                //     <Route path='/ui/icons' component={Routes.get('Icons').component}/>
                //     <Route path='/ui/dropdown' component={Routes.get('DropdownMenu').component}/>
                //     <Route path='/ui/pageination' component={Routes.get('Pageination').component}/>
                // </Switch>
        )
    }
}