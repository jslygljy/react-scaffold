import React, { Component } from "react";
  import { Layout, Icon } from "antd";
  
  import autobind from 'autobind-decorator'
  import RouterUrl from "router/RouterUrl";
  import Nav from "containers/Nav";
  import { FormattedMessage } from 'react-intl';
  import './index.css';
  

const { Header, Sider, Footer } = Layout;

export default class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed:false
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
      };
    render() {
        return (
            <div className="App">
                <Layout style={{ height: "100%" }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className='logo' style={{ color: '#fff' }}></div>
                        <Nav />
                    </Sider>
                    <Layout>
                        <Header
                            style={{ background: "#424242 !important", padding: 0, paddingLeft: "20px" }}
                        >
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                                onClick={this.toggle}
                                style={{ fontSize: 20, color: '#fff' }}
                            />
                        </Header>
                        <RouterUrl />
                        <Footer style={{ textAlign: 'center' }}>
                            -Admin ©2017 Created by junyu
                </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

