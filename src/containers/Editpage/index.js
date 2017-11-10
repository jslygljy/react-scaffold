import React, { Component } from "react";
import {
    Row,
    Col,
    Button,
    Select,
    Input,
    Icon,
    Modal,
    Tag,
    Form,
    DatePicker,
    Checkbox,
    Tabs,
    Upload
} from "antd";
import ModePage from 'Modebase/page'
import RouterUrl from "router/RouterUrl";
import './index.css';
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import webconfig from 'src/config'
import http from 'Modebase/http'
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

/**
 * @param {File} image - Image File Object
 * @param {Object} pixelCrop - pixelCrop Object provided by react-image-crop
 * @param {String} fileName - Name of the returned file in Promise
 */
function getCroppedImg(image, pixelCrop, fileName) {

    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
        canvas.toBlob(file => {
            file.name = fileName;
            resolve(file);
        }, 'image/jpeg');
    });
}

// TODO
// 去除所有state
@observer
export default class Editpage extends ModePage {
    constructor(props) {
        super(props);
        this.state = {
            title: '',    //文章标题
            type: '',    //文章类型
            startview: '',   //起始阅读量
            datapicker: '',   //文章发布时间
            author: '',          //作者
            rescoures: '',       //来源
            declare: false,      //申明
            abstract: '',       //摘要
            label: '',          //标签
            coverImgUrl: '',
            recommendAppImgUrl: '',
            recommendWebImgUrl: '',
            editorState: EditorState.createEmpty(),  //正文
            editorhtml:'',        //正文html
            crop: {
                x: 0,
                y: 0,
                aspect: 16 / 9,
            },
            maxHeight: 80,
        };
    }
    buttonClick = () => {
        this.test()
        this.setState({
            crop: makeAspectCrop({ ...this.state.crop, aspect: this.state.crop.aspect > 1 ? 9 / 16 : 16 / 9 }, this.state.width / this.state.height)
        })


    }
    async test() {

        const blobBin = await getCroppedImg(this.state.image, this.state.crop, 'file');
        var fd = new FormData();
        fd.append("file", blobBin);
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post(webconfig.uploadfile, fd, config).then(function (res) {
            console.log(res)
        })

        // http.post({
        //     url:webconfig.uploadfile,
        //     params: {
        //         file:fd
        //     }
        //   })
        //   .then(response => response.json())
        //   .then(json => {
        //       console.log(json)
        //   })
        // var oReq = new XMLHttpRequest();
        // oReq.open("POST",webconfig.uploadfile);
        // oReq.send(fd);

    }
    onCropChange = (crop) => {
        this.setState({ crop });
    }
    onCropComplete = (crop, pixelCrop) => {
        console.log('onCropComplete, pixelCrop:', pixelCrop, crop);
    }
    onImageLoaded = (image) => {
        this.setState({
            crop: makeAspectCrop({
                x: 0,
                y: 0,
                aspect: 16 / 9,

            }, image.naturalWidth / image.naturalHeight),
            image,
        });
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            editorhtml:draftToHtml(convertToRaw(editorState.getCurrentContent()))
        });
        console.log(this.state.editorhtml)
    };
    onChangecover = (crop) => {
        this.setState({ crop });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }



    handleChange = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, coverImgUrl => this.setState({ coverImgUrl }));
        }
    }
    recommendappChange = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, recommendAppImgUrl => this.setState({ recommendAppImgUrl }));
        }
    }
    recommendwebChange = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, recommendWebImgUrl => this.setState({ recommendWebImgUrl }));
        }
    }
    onChangetitle = (value) => {
        this.setState({ title: value });
    }
    handleChangetype = (value) => {
        this.setState({ type: value })
    }
    onChangestartview = (value) => {
        this.setState({ startview: value })
    }
    Changedatepick = (value) => {
        this.setState({ datapicker: value })
    }
    onChangeauthor = (value) => {
        this.setState({ author: value })
    }
    Changerescoures = (value) => {
        this.setState({ rescoures: value })
    }
    onChangedeclare = (e) => {
        this.setState({ declare: e.target.checked })
    }
    Changelabel = (value) => {
        this.setState({ label: value })
    }

    Changeabstract = (value) => {
        this.setState({ abstract: value })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const config = {
            rules: [{ type: 'object', message: 'Please select time!' }],
        };
        return (

            <div className="Editpage">
                <Row gutter={16} className='buttonlist'>
                    <Col span={6}>
                        <Button type="primary" size='large'><Link to={`/ui/information`}>返回</Link></Button>
                    </Col>
                    <Col span={12}>

                    </Col>
                    <Col span={6}>
                        <Button type="primary" size='large' style={{ marginLeft: 20 }}>预览</Button>
                        <Button type="primary" size='large' style={{ marginLeft: 20 }}>保存</Button>
                        <Button type="primary" size='large' style={{ marginLeft: 20 }}>保存并发布</Button>
                    </Col>
                </Row>

                <Form className='Editform'>
                    <FormItem
                        label="文章标题"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 8 }}
                        hasFeedback
                    >
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true, message: '文章标题必填',
                            }],
                        })(
                            <Input value={this.state.title} onChange={this.onChangetitle} />
                            )}
                    </FormItem>

                    <Row>

                        <Col span={12}>
                            <FormItem
                                label="所属类别"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                            >
                                {getFieldDecorator('type', {
                                    rules: [
                                        { required: true, message: '所属类别必填', },
                                    ],
                                })(
                                    <Select placeholder="请选择" onChange={this.handleChangetype}>
                                        <Option value="red">Red</Option>
                                        <Option value="green">Green</Option>
                                        <Option value="blue">Blue</Option>
                                    </Select>
                                    )}
                            </FormItem>
                        </Col>

                        <Col span={12}>
                            <FormItem label="起始阅读量"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 4 }}
                            >
                                {getFieldDecorator('price', {
                                    initialValue: 0
                                })(
                                    <Input value={this.state.startview} onChange={this.onChangestartview} />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem
                                label="发布时间"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 10 }}
                            >
                                {getFieldDecorator('date-picker', config)(
                                    <DatePicker size='large' onChange={this.Changedatepick} style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <p className='fontname'>所有资讯将根据发布时间自行排序</p>
                        </Col>
                    </Row>

                    <FormItem
                        label="作者"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 8 }}
                    >
                        {getFieldDecorator('author')(
                            <Input value={this.state.author} onChange={this.onChangeauthor} />
                        )}
                    </FormItem>

                    <Row>
                        <Col span={12}>
                            <FormItem
                                label="来源"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                            >
                                {getFieldDecorator('string', {
                                })(
                                    <Input value={this.state.rescoures} onChange={this.Changerescoures} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <Checkbox onChange={this.onChangedeclare} style={{ marginTop: '4px' }}>免责申明</Checkbox>
                        </Col>
                    </Row>

                    <Tabs defaultActiveKey="1" type="card" style={{ marginBottom: 20 }}>
                        <TabPane tab="上传普通封面" key="1">
                            <div className='uploadcontent'>
                                <p className='uploadfont'>网页/移动封面：</p>

                                <Upload
                                    className="avatar-uploader"
                                    name="file"
                                    showUploadList={false}
                                    action={webconfig.uploadfile}
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.coverImgUrl ?
                                            null
                                            : <Icon type="plus" className="avatar-uploader-trigger" />
                                    }
                                </Upload>

                                {
                                    this.state.coverImgUrl ?
                                        <div className="avatar-uploader">
                                            <ReactCrop
                                                {...this.state}
                                                src={this.state.coverImgUrl}
                                                crop={this.state.crop}
                                                onChange={this.onChangecover}
                                                onImageLoaded={this.onImageLoaded}
                                            />
                                            {/* <img src={this.state.coverImgUrl} alt="" className="avatar" />
                                                <Icon type="delete" className='delicon' /> */}
                                            <button onClick={this.buttonClick}>Programatically set crop</button>

                                        </div>
                                        : null
                                }
                            </div>
                        </TabPane>

                        <TabPane tab="上传推荐封面" key="2">
                            <Row className='uploadcontent'>
                                <Col span={12}>
                                    <p className='uploadfont'>网页版封面：</p>
                                    <Upload
                                        className="recommendapp-uploader"
                                        name="recommendapp"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.recommendappChange}
                                    >
                                        {
                                            this.state.recommendAppImgUrl ?
                                                <div>
                                                    <img src={this.state.recommendAppImgUrl} alt="" className="avatar" />
                                                    <Icon type="delete" className='delicon' />
                                                </div>
                                                :
                                                <Icon type="plus" className="recommendapp-trigger" />
                                        }
                                    </Upload>
                                </Col>
                                <Col span={12}>
                                    <p className='uploadfont'>移动版封面：</p>
                                    <Upload
                                        className="avatar-uploader"
                                        name="recommendweb"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.recommendwebChange}
                                    >
                                        {
                                            this.state.recommendWebImgUrl ?
                                                <div>
                                                    <img src={this.state.recommendWebImgUrl} alt="" className="avatar" />
                                                    <Icon type="delete" className='delicon' />
                                                </div>
                                                :
                                                <Icon type="plus" className="avatar-uploader-trigger" />
                                        }
                                    </Upload>
                                </Col>
                            </Row>
                        </TabPane>

                    </Tabs>

                    <Row>
                        <Col span={10}>
                            <FormItem
                                label="标签"
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 18 }}
                            >
                                {getFieldDecorator('label')(
                                    <Input value={this.state.label} onChange={this.Changelabel} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <p className='fontname'>多个标签之间用逗号隔开</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <FormItem
                                label="摘要"
                                labelCol={{ span: 2 }}
                                wrapperCol={{ span: 14 }}
                            >
                                {getFieldDecorator('zhaiyao')(
                                    <Input type="textarea" value={this.state.abstract} onChange={this.Changeabstract} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Editor
                        editorState={this.state.editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Form>

            </div>
        )
    }
}




