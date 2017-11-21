import React, { Component } from "react";
import './index.css';
import {
  Row,
  Col,
  Button,
  Select,
  Input,
  Icon,
  Modal,
  Tag,
  Pagination,
  Form
} from "antd";
const FormItem = Form.Item;

export default class CustDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'输入验证码'
        }
    }
    onChangetitle(){

    }
      startcustdown(){
        this.setState({
          name: '60s'
        });
        this.countdown()
      }
  countdown(){

  }
    render() {
        const {
            startTime
        } = this.props
          const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 14 },
            },
          };
        return (
            <div className="CustDown">
                <Row>
                    <Col span={12}>
                        <FormItem
                          {...formItemLayout}
                          label="Captcha"
                        >
                            <Row gutter={8}>
                                <Col span={12}>
                                  <Input size="large" />
                                </Col>
                                <Col span={12}>
                                    <Button size="large" onClick={()=>this.startcustdown()}>
                                      {this.state.name}
                                    </Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <span>
                          {startTime}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

