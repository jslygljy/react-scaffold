import React, {Component, PropTypes} from "react";
import autobind from "autobind-decorator";
import "./index.css";

class Alert extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  getBtnDOM() {
    const {
      type,
      btnOK,
      btnCancel,
      children
    } = this.props;
    const dom = [];
    switch(type) {
      case 'warning':
      dom.push(<div className="alert-btn" key={1} onClick={btnOK.callback}>{btnOK.txt}</div>);
      break;
      case 'confirm':
      dom.push(<div className="alert-btn border-right cancel-btn" key={1} onClick={btnCancel.callback}>{btnCancel.txt}</div>);
      dom.push(<div className="alert-btn del-btn" key={2} onClick={btnOK.callback}>{btnOK.txt}</div>);
      break;
      case 'txt':
      case 'pwd':
      dom.push(<div className="alert-btn border-right" key={1} onClick={btnOK.callback}>{btnOK.txt}</div>);
      dom.push(<div className="alert-btn" key={2} onClick={btnCancel.callback}>{btnCancel.txt}</div>);
      break;
      case 'custom':
      React.Children.forEach(children,(child,index)=>{
        if(child.props.type === 'btn'){
         dom.push(React.cloneElement(child,{key:index}));
        }
      });
      break;
      default:
      return null;
    }
    return dom;
  }

  @autobind
  getAlertContent() {
    const {
      type,
      message,
      children
    } = this.props;
    switch(type) {
      case 'custom':
      let contentDOM = null;
      React.Children.forEach(children,(child,index)=>{
        if(child.props.type === 'content') {
          contentDOM = child;
        }
      });
      return contentDOM;
      default:
      return (<div className="alert-message">{message}</div>);
    }
  }

  render() {
    const {
      title,
      message
    } = this.props;
    return (
    <div className="alert-container">
      <div className="alert-block">
          <div className="alert-content">
          {title ?
            <div className="alert-title">
              {title}
            </div> : null}
            {this.getAlertContent()}
          </div>
          <div className="button-block">
              {this.getBtnDOM()}
          </div>
      </div>
    </div>);
  }
}

// Alert = disableNativeMove(Alert);
Alert.Btn = Btn;
export default Alert;

/**
 * type: warning: 警告, confirm: 确认, txt: 文字输入，pwd: 密码
 */
Alert.propTypes = {
  type: PropTypes.string, // warning confirm txt pwd custom
  title: PropTypes.string,
  btnOK: PropTypes.shape({
    txt: PropTypes.string,
    callback: PropTypes.func
  }),
  btnCancel: PropTypes.shape({
    txt: PropTypes.string,
    callback: PropTypes.func
  }),
};

Alert.defaultProps = {
  type: 'warning',
  btnOK: {
    txt: '确定',
    callback: ()=>{console.log('confirm')}
  },
  btnCancel: {
    txt: '取消',
    callback: ()=>{console.log('cancel')}
  }
};
