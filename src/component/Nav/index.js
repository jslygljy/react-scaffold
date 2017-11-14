import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
class Nav extends Component {
  state = {
    theme: "dark",
    current: "",
    open: ""
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };
  componentDidMount = () => {
    /**
     * @param 获取url 设置当前Select Menu
    */
    let url = window.location.href;
    const selected = url.replace(
      url.substr(0, url.indexOf("/", url.indexOf("://", 0) + 3)).toString(),
      ""
    );
    let Open = selected.substring(
      0,
      selected.indexOf("/", selected.indexOf("/") + 1)
    );
    this.setState({
      open: Open === "" ? "/ui" : Open,
      current: selected === "/" ? "/ui/information" : selected
    });
  };
  openMenu = data => {
    this.setState({
      open: data[data.length - 1]
    });
  };
  handleClick = e => {
    console.log(e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        style={{ width: "100%" }}
        selectedKeys={[this.state.current]}
        openKeys={[this.state.open]}
        onOpenChange={this.openMenu}
        mode="inline"
      >
        <SubMenu
          key="/ui"
          title={
            <span>
              <Icon type="environment-o" />
              <span>资讯管理</span>
            </span>
          }
        >
          <Menu.Item key="/ui/information">
            <Link to={`/ui/information`}>资讯管理</Link>
          </Menu.Item>
          <Menu.Item key="/ui/reshopment">
            <Link to={`/ui/reshopment`}>转载专区</Link>
          </Menu.Item>
          <Menu.Item key="/ui/buttons">
            <Link to={`/ui/buttons`}>button</Link>
          </Menu.Item>
          <Menu.Item key="/ui/icons">
            <Link to={`/ui/icons`}>icons</Link>
          </Menu.Item>
          <Menu.Item key="/ui/dropdown">
            <Link to={`/ui/dropdown`}>dropdown</Link>
          </Menu.Item>
          <Menu.Item key="/ui/pageination">
            <Link to={`/ui/pageination`}>pageination</Link>
          </Menu.Item>

        </SubMenu>
        
      </Menu>


    );
  }
}
export default Nav;
