import React from "react";
import {
    Icon,
    Breadcrumb} from "antd";
import ModePage from 'Modebase/page'
import './index.css'
import IconsStore from 'component/Icons/stores'
import {observer} from "mobx-react";

@observer
class Icons extends ModePage {
    iconsList(){
        console.log( IconsStore.icons)
        return (
            <div>
                {
                    IconsStore.icons.map((icon, i) => (
                    <a href='###' key={i}>
                        <Icon type={icon} style={{fontSize: 15}} />
                        <br/>
                        <span>{icon}</span>
                    </a>
                ))
                }
            </div>
        )
    }
    render() {
        return (
            <div className="iconsContent">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="credit-card" />
                        <span>UI</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Icons
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="icons">
                    {this.iconsList()}
                </div>
            </div>
        );
    }
}

export default Icons;