import React from "react";
import {
    Row,
    Col,
    Button,
    Select,
    Input,
     Icon,
     Modal,
     Tag,
     Pagination
} from "antd";
import ModePage from 'Modebase/page'
import './index.css'
import {observer} from "mobx-react";
import { Link } from "react-router-dom";
import ShareButtons from '../components';
import CustDown from 'component/CustDown'


const Option = Select.Option;
const Search = Input.Search;

@observer
class Information extends ModePage {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          modalVisible: false
        };
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    statusChange(value){
        console.log(`selected ${value}`);
    }
    setModalVisible(vaule){
        this.setState({ modalVisible:vaule });
    }
    changepage(current, pageSize) {
        console.log(current, pageSize);
      }
    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div className="informationpage">
                <CustDown
                  startTime={123213123213}
                ></CustDown>
                <Row gutter={16}>
                    <Col span={6}>所属类别:
                        <Select defaultValue="0" style={{width:170,marginLeft:10}} size="large" onChange={this.handleChange}>
                            <Option value="0">全部</Option>
                            <Option value="1">农产</Option>
                            <Option value="2">汽车</Option>
                            <Option value="3">钢材</Option>
                            <Option value="4">包装</Option>
                            <Option value="5">箱包</Option>
                            <Option value="6">精选</Option>
                            <Option value="7">头条</Option>
                        </Select>
                    </Col>
                    <Col span={6}>状态:
                        <Select defaultValue="0" style={{width:170,marginLeft:10}} size="large" onChange={this.statusChange}>
                            <Option value="0">全部</Option>
                            <Option value="1">已发布</Option>
                            <Option value="2">未发布</Option>
                        </Select>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="请输入文章关键词"
                            style={{ width: 220 }}
                            onSearch={value => console.log(value)}
                            onPressEnter={value => console.log(value)}
                        />
                    </Col>
                    <Col span={2} offset={4}>
                        <Button type="primary" size='large'><Link to={`/ui/information`}>添加新闻</Link></Button>
                    </Col>
                </Row>  
                
                <Row gutter={16} className="listtite">
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <span style={{border:'1px solid #eeac75'}}></span>
                            <span style={{border:'1px solid #fff'}}></span>
                            <div className="gutter-box">文章标题</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <span style={{border:'1px solid #eeac75'}}></span>
                        <span style={{border:'1px solid #fff'}}></span>
                        <div className="gutter-box">类别</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <span style={{border:'1px solid #eeac75'}}></span>
                        <span style={{border:'1px solid #fff'}}></span>
                        <div className="gutter-box">发布时间</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <span style={{border:'1px solid #eeac75'}}></span>
                        <span style={{border:'1px solid #fff'}}></span>
                        <div className="gutter-box">来源</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <span style={{border:'1px solid #eeac75'}}></span>
                        <span style={{border:'1px solid #fff'}}></span>
                        <div className="gutter-box">状态</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <span style={{border:'1px solid #eeac75'}}></span>
                        <span style={{border:'1px solid #fff'}}></span>
                        <div className="gutter-box">操作</div>
                    </Col>
                </Row>
                <Row gutter={16} className="lists">
                    <Col className="gutter-row" span={8}>
                        <div className="listsfont">
                            <span className="recomandspan">[推荐]</span>
                            <span>4分钟就能上门，无人机送外卖开始在冰岛商</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <div className="listsfont">精选</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="listsfont">2016/02/13 14:00</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div className="listsfont">中国工业网</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div className="listsfont">已发布</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <a onClick={() => this.setModalVisible(true)}>预览</a>
                        <a className='editbutton'><Link to={`/ui/edit`}>编辑</Link></a>
                        <a className='editbutton'>删除</a>
                        <a className='editbutton'>发布</a>
                    </Col>
                </Row>
                <Row gutter={16} className="lists bgwhite">
                    <Col className="gutter-row" span={8}>
                        <div className="listsfont">
                            <span className="recomandspan">[推荐]</span>
                            <span>4分钟就能上门，无人机送外卖开始在冰岛商</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <div className="listsfont">精选</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="listsfont">2016/02/13 14:00</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div className="listsfont">中国工业网</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div className="listsfont">已发布</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <a onClick={() => this.setModalVisible(true)}>预览</a>
                        <a className='editbutton'>编辑</a>
                        <a className='editbutton'>删除</a>
                        <a className='editbutton'>发布</a>
                        <a className='editbutton'>下架</a>
                    </Col>
                </Row>

                <Pagination defaultCurrent={1} total={100} pageSize={10} onChange={()=> this.changepage()} className='pageinationlist'/>
                <Modal
                    visible={this.state.modalVisible}
                    closable={false}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                    width='1015'
                    footer={null}
                    wrapClassName="vertical-modal"

                >
                    
                    <Button type="primary" size='large' className='pagebutton' onClick={() => this.setModalVisible(false)}><Link to={`/ui/information`}>退出预览</Link></Button>
                    <div className='perviewcontent'>
                        <div className='contentborder'>
                            <div className='w770'>
                                <h3 className='fonttitle'>这是一段文字标题这是一段标题这是一段标题这是一段标题这是一段文字标题</h3>
                                <div className='font-info'>
                                    <span className='font-info-span'>2017/08/17  09:24</span>        
                                    <span className='font-info-span'>来源：中国工业网</span>
                                    <span className='font-info-span'>作者：一只特立独行的猫</span>
                                </div>
                                <div className='font-page'>

                                </div>

                                <div className='declare'>
                                    免责申明：凡注明来源本网的所有作品，均为本网合法拥有版权或有使用权的作品，不代表本网立场，转载须注明出处。
                                </div>

                                <div className='taglist'>
                                    <Tag size='large' className='tagstyle' color="#fff">人工智能</Tag>
                                    <Tag size='large' className='tagstyle' color="#fff">人工智能</Tag>
                                </div>
                                <div style={{marginBottom:40}}>
                                    <ShareButtons 
                                        sites={["wechat","qq","weibo","qzone"]}
                                        url = {window.location.href}
                                        title = {window.document.title}
                                        description = "一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+ 的 react 组件"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Information;