import React, {
  PureComponent
} from 'react';
import NProgress from "nprogress";
import "nprogress/nprogress.css";



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

}

export default ModePage;
