import React,{Component} from "react";

import { LocaleProvider } from "antd";
// 注册路由 
import { BrowserRouter } from "react-router-dom";

import config from './config'

//注册 mobx
import { Provider } from 'mobx-react'
import RootStore from './store/RootStore'
import Indexpage from 'containers/Page'


//注册 多语言 
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import enUS from 'antd/lib/locale-provider/en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import zh_CN from 'language/zh_CN';
import en_US from 'language/en_US';

// 根状态, 比如当前应用的整体信息
const rootStore = new RootStore()

// 配置多语言
let messages = {};
messages["en-US"] = en_US;
messages["zh-CN"] = zh_CN;
const currentLang = rootStore.language;
addLocaleData([...zh, ...en]);


class App extends Component {
  
  render() {
    return (
      <IntlProvider locale={currentLang} messages={messages[currentLang]}>
        <LocaleProvider locale={enUS}>
          <Provider $rootStore={rootStore}>
            <BrowserRouter>
                <Indexpage></Indexpage>
            </BrowserRouter>
          </Provider>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}
export default App;