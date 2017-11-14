import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
// 异步引入
import {Bundle} from 'Modebase'
import  {
    Form
} from "antd";


const Buttons = (props) => (
    <Bundle load={(cb) => {
            require.ensure([], require => {
                cb(require('component/Buttons/containers').default);
            },'Buttons');
        }}>
        {(Buttons) => <Buttons {...props}/>}
    </Bundle>
);

const Icons = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/Icons/containers').default);
        },'Icons');
    }}>
        {(Icons) => <Icons {...props}/>}
    </Bundle>
);

const DropdownMenu = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/DropdownMenu/containers').default);
        },'DropdownMenu');
    }}>
        {(DropdownMenu) => <DropdownMenu {...props}/>}
    </Bundle>
);

const Pageination = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/Pageination/containers').default);
        },'Pageination');
    }}>
        {(Pageination) => <Pageination {...props}/>}
    </Bundle>
);

const Information = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/Information/containers').default);
        },'Information');
    }}>
        {(Information) => <Information {...props}/>}
    </Bundle>
);

const Reshopment = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/Reshipment/containers').default);
        },'Reshopment');
    }}>
        {(Reshopment) => <Reshopment {...props}/>}
    </Bundle>
);

const Editpage = (props) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('component/Editpage').default);
        },'Editpage');
    }}>
        
        {(Editpage) => <Editpage {...props}/>}
    </Bundle>
);

const EditpageForm =Form.create({})(Editpage); 



export default class RouterUrl extends Component{

    render(){
        return(
                <Switch>
                    <Route exact path='/' component={Buttons}/>
                    <Route path='/ui/icons' component={Icons}/>
                    <Route path='/ui/buttons' component={Buttons}/>
                    <Route path='/ui/dropdown' component={DropdownMenu}/>
                    <Route path='/ui/pageination' component={Pageination}/>
                    <Route path='/ui/information' component={Information}/>
                    <Route path='/ui/reshopment' component={Reshopment}/>
                    <Route path='/ui/edit' component={EditpageForm}/>
                    
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