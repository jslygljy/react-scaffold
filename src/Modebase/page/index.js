import React, {
  PureComponent
} from 'react';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import './index.css'



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
