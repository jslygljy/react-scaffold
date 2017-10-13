import React, {
  PureComponent
} from 'react';
import { Layout, Icon } from "antd";

import autobind from 'autobind-decorator'
import RouterUrl from "router/RouterUrl";
import Nav from "router/Nav";
import { FormattedMessage } from 'react-intl';
import './index.css';

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const { Header, Sider, Footer } = Layout;

class ModePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    NProgress.start();
  };
  componentDidMount = () => {
    NProgress.done();
  };

  render() {
    return (
     <div></div>
    )
  }
}

export default ModePage;
