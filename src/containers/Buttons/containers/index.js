import React from "react";
import {
    Button,
    Layout,
    Row,
    Col,
    Icon,
    Breadcrumb
} from "antd";


import { FormattedMessage } from 'react-intl';
import ModePage from 'Modebase/page'
import './index.css';
import ButtonStore from 'containers/Buttons/stores'
import {observer} from "mobx-react";


const { Content } = Layout;
const ButtonGroup = Button.Group;

@observer
class Buttons extends ModePage {

    render() {
        return (
            <div className="button">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="credit-card" />
                        <span>UI</span>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <FormattedMessage
                            tagName='span'
                            id='Buttons'
                        />
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col span={12}>
                        <Content  className="buttoncontent">
                            <h4>
                                <FormattedMessage
                                    tagName='span'
                                    id='Basic'
                                />
                            </h4>
                            <ButtonGroup>
                                <Button>Cancel</Button>
                                <Button type="primary">OK</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button disabled>L</Button>
                                <Button disabled>M</Button>
                                <Button disabled>R</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary">L</Button>
                                <Button>M</Button>
                                <Button>M</Button>
                                <Button type="dashed">R</Button>
                            </ButtonGroup>

                            <h4>With Icon</h4>
                            <ButtonGroup>
                                <Button type="primary">
                                    <Icon type="left" />Go back
                                </Button>
                                <Button type="primary">
                                    Go forward<Icon type="right" />
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary" icon="cloud" />
                                <Button type="primary" icon="cloud-download" />
                            </ButtonGroup>
                        </Content>
                    </Col>
                    <Col span={12}>
                        <Content className="buttoncontent"
                        >
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">
                                {ButtonStore.Search}
                            </Button>
                            <Button shape="circle" icon="search" />
                            <Button icon="search">{ButtonStore.Search}</Button>
                            <br />
                            <Button shape="circle" icon="search" />
                            <Button icon="search">{ButtonStore.Search}</Button>
                            <Button type="dashed" shape="circle" icon="search" />
                            <Button type="dashed" icon="search">
                                {ButtonStore.Search}
                            </Button>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Content className="contentmargin">
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <br />
                            <Button type="dashed">Dashed</Button>
                            <Button type="danger">Danger</Button>
                        </Content>
                    </Col>
                    <Col span={12}>
                        <Content className="buttoncontent">
                            <Button type="primary" ghost>
                                Primary
                            </Button>
                            <Button ghost>Default</Button>
                            <br />
                            <Button type="dashed" ghost>
                                Dashed
                            </Button>
                            <Button type="danger" ghost>
                                danger
                            </Button>
                        </Content>
                    </Col>
                    <Col span={24}>
                        <Content className="buttoncontent">
                            <Button type="primary">Primary</Button>
                            <Button type="primary" disabled>
                                Primary(disabled)
                            </Button>
                            <br />
                            <Button>Default</Button>
                            <Button disabled>Default(disabled)</Button>
                            <br />
                            <Button>Ghost</Button>
                            <Button disabled>Ghost(disabled)</Button>
                        </Content>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Buttons;
