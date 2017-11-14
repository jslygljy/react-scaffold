import React from "react";
import {
    Icon,
    Breadcrumb,
    Menu,
    Dropdown,
    Row,
    Col,
    message,
    Layout,
    Button
} from "antd";
import ModePage from 'Modebase/page'
import './index.css'
import DropDownStore from 'component/DropdownMenu/stores'
import {observer} from "mobx-react";
const { Content } = Layout;

@observer
class DropdownMenu extends ModePage {
    handleButtonClick = e => {
        message.info("Click on left button.");
    };

    handleMenuClick = e => {
        message.info("Click on menu item.");
    };
    menudirection(){
        return (
            <Menu>
                {
                    DropDownStore.maths.map(data=>{
                        return (
                            <Menu.Item>
                                <a target="_blank" rel="noopener noreferrer">
                                    {data}
                                </a>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
    }
    Blockmenu(){
        return (
            <Menu onClick={this.handleMenuClick}>
                {
                    DropDownStore.maths.map((data,i)=>{
                        return (
                            <Menu.Item key={i}>{data}</Menu.Item>
                        )
                    })
                }
            </Menu>
        );
    }
    menu(){
        return (
            <Menu>
                {
                    DropDownStore.maths.map((data, i) => {
                        return (
                            <Menu.Item key={i}>
                                <a target="_blank" rel="noopener noreferrer">
                                    {data}
                                </a>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }
    render() {
        return (
            <div className="downMenu">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="credit-card" />
                        <span>UI</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>DropdownMenu</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col span={12}>
                        <Content className="downMenucontent">
                            <Dropdown overlay={this.menu()}>
                                <a className="ant-dropdown-link" href="###">
                                    Hover me <Icon type="down" />
                                </a>
                            </Dropdown>
                        </Content>
                    </Col>
                    <Col span={12}>
                        <Content className="downMenucontent">
                            <Dropdown.Button
                                onClick={this.handleButtonClick}
                                overlay={this.Blockmenu()}
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                onClick={this.handleButtonClick}
                                overlay={this.menu()}
                                disabled
                                style={{ marginLeft: 8 }}
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown overlay={this.menu()}>
                                <Button style={{ marginLeft: 8 }}>
                                    Button <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Content className="downMenucontent">
                            <Dropdown overlay={this.menudirection()} placement="bottomLeft">
                                <Button>bottomLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={this.menudirection()} placement="bottomCenter">
                                <Button>bottomCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={this.menudirection()} placement="bottomRight">
                                <Button>bottomRight</Button>
                            </Dropdown>
                            <br />
                            <Dropdown overlay={this.menudirection()} placement="topLeft">
                                <Button>topLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={this.menudirection()} placement="topCenter">
                                <Button>topCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={this.menudirection()} placement="topRight">
                                <Button>topRight</Button>
                            </Dropdown>
                        </Content>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DropdownMenu;
