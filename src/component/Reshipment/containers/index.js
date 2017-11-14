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
    Pagination,
    message
} from "antd";
import ModePage from 'Modebase/page'
import './index.css'
import { observer } from "mobx-react";
import webconfig from 'src/config'
import axios from 'axios';

const Option = Select.Option;
const Search = Input.Search;

@observer
class Reshipment extends ModePage {
    constructor(props) {
        super(props);
        this.state = {
            listMath: [],
            pageSize: 10,
            pageNum: 0
        };
    }
    fetchlist() {
        let currypageNum = this.state.pageNum + 1
        axios.post(webconfig.getReprint, {
            pageNum: currypageNum,
            pageSize: this.state.pageSize
        }).then(res => {
            if (res.data.obj.pageSize < 10 && res.data.obj.list.toString() == this.state.listMath.toString()) { 
                message.info('暂无更多数据'); 
                return false; 
            }
            this.setState({
                listMath: res.data.obj.list,
                pageNum: currypageNum
            })
        })
    }
    componentDidMount = () => {
        this.fetchlist()
    }
    dataformat(pubdate, format) {
        var date = {
            "M+": pubdate.getMonth() + 1,
            "d+": pubdate.getDate(),
            "h+": pubdate.getHours(),
            "m+": pubdate.getMinutes(),
            "s+": pubdate.getSeconds(),
            "q+": Math.floor((pubdate.getMonth() + 3) / 3),
            "S+": pubdate.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (pubdate.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }
    renderlist() {
        return (
            this.state.listMath.map((data, index) => {
                return (
                    <Row gutter={16} className={["lists", index / 2 == 0 ? '' : 'bgwhite']} key={index}>
                        <Col className="gutter-row" span={10}>
                            <div className="listsfont">
                                <span>{data.title}</span>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="listsfont">{this.dataformat(new Date(data.pubdate), 'yyyy-MM-dd h:m:s')}</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="listsfont">{data.source}</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <a className='editbutton' href={data.link} target="_blank">跳转链接</a>
                        </Col>
                    </Row>
                )
            })
        )

    }
    render() {
        return (
            <div className="informationpage">
                <Row>
                    <Col span={2} offset={22}>
                        <Button type="primary" size='large' onClick={() => this.fetchlist()}>刷新列表</Button>
                    </Col>
                </Row>
                <Row gutter={16} className="listtite">
                    <Col className="gutter-row" span={10}>
                        <div className="gutter-box">
                            <span style={{ border: '1px solid #eeac75' }}></span>
                            <span style={{ border: '1px solid #fff' }}></span>
                            <div className="gutter-box">文章标题</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <span style={{ border: '1px solid #eeac75' }}></span>
                        <span style={{ border: '1px solid #fff' }}></span>
                        <div className="gutter-box">发布时间</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <span style={{ border: '1px solid #eeac75' }}></span>
                        <span style={{ border: '1px solid #fff' }}></span>
                        <div className="gutter-box">来源</div>
                    </Col>

                    <Col className="gutter-row" span={4}>
                        <span style={{ border: '1px solid #eeac75' }}></span>
                        <span style={{ border: '1px solid #fff' }}></span>
                        <div className="gutter-box">操作</div>
                    </Col>
                </Row>
                {this.renderlist()}
            </div>
        );
    }
}

export default Reshipment;