import React from "react";
import {
    Icon,
    Breadcrumb,
    Row,
    Col,
    Layout,
    Pagination } from "antd";
import ModePage from 'Modebase/page'
import './index.css'
const { Content } = Layout;

class Pageination extends ModePage {
    onShowSizeChange=(current, pageSize)=> {
        console.log(current, pageSize);
    }
    render() {
        return (
            <div className="Pageination">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="credit-card" />
                        <span>UI</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Pageination</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col span={12}>
                        <Content className="pagecontent">
                            <Pagination defaultCurrent={1} total={50} />
                        </Content>
                    </Col>
                    <Col span={12}>
                        <Content className="pagecontent">
                            <Pagination simple defaultCurrent={2} total={50} />
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Content className="pagecontent">
                            <Pagination
                                showSizeChanger
                                onShowSizeChange={this.onShowSizeChange}
                                defaultCurrent={3}
                                total={500}
                            />
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Content className="pagecontent">
                            <Pagination
                                total={85}
                                showTotal={total => `Total ${total} items`}
                                pageSize={20}
                                defaultCurrent={1}
                            />
                            <br />
                            <Pagination
                                total={85}
                                showTotal={(total, range) =>
                                    `${range[0]}-${range[1]} of ${total} items`}
                                pageSize={20}
                                defaultCurrent={1}
                            />
                        </Content>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Pageination;
