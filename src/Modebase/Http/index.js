import {
    AsyncStorage,
    Alert
} from 'react-native';
import {
    suffix,
    getSign
} from '../Utils';
import Logger from '../Logger'

import httpErrorHandle from './httpErrorHandle'

class Http {
    canAlert: true

    _jsonToQueryString(json) {
        return '?' +
        Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' + (json[key]);
        }).join('&');
    }

    async getAccessToken() {
        let access_token,role;
        try {
            access_token = await AsyncStorage.getItem('token');
            role = await AsyncStorage.getItem('role');
            return {
                access_token,
                role
            };
        }catch(err) {
            return {
                code: -999,
                message: 'Fail to get access_token,role from AsyncStorage'
            }
        }
    }

    /**
    * options: {
    *  url,
    *  params
    * }
    */
    async get(options) {
        const roleData = await this.getAccessToken();
        if(roleData.code === -999) {
            return roleData;
        }
        const { url,
                params,
                headers } = options;
        let newParms = Object.assign({},roleData,params);
        const paramsString = this._jsonToQueryString(newParms);
        const URL = `${url}${paramsString}${suffix(newParms)}`;
        console.log('URL:', URL)

        let response;
        try {
            response = await fetch(URL);
            let json = await response.json();
            // console.log('get json:', json)
            this.canAlert = true
            Logger.sendHttpLog({
              url,
              code: json.code,
              response: json
            })
            return httpErrorHandle.checkResponse(json);
        }catch(error) {
            Logger.sendHttpLog({
              url,
              code: '-1',
              response: error
            })
            if (this.canAlert) {
                Alert.alert('',
                    `网络异常，请重试`
                );
                this.canAlert = false
            }
            return {
                code: -999,
                message: '网络异常，请重试',
                data:{}
            }
        }
    }

    async post(options) {
        const roleData = await this.getAccessToken();
        if(roleData.code === -999) {
            return roleData;
        }
        const {
            url,
            params,
            headers
        } = options;
        const accessToken = roleData.access_token
        const role = roleData.role
        let newParms = Object.assign({
        }, {
            access_token: accessToken,
            JSON: JSON.stringify(params),
        });
        console.log('newParms:', newParms)
        const paramsString = this._jsonToQueryString({access_token: accessToken});
        const URL = `${url}${paramsString}${suffix(newParms)}`;
        console.log('URL:', URL)
        let response;
        try {
            response = await fetch(URL,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify(params)
                });
            let json = await response.json();
            // console.log('json:', json)
            Logger.sendHttpLog({
              url,
              request: newParms,
              code: json.code,
              response: json
            })
            this.canAlert = true;
            return httpErrorHandle.checkResponse(json);
        }catch(error) {
            Logger.sendHttpLog({
              url,
              request: newParms,
              code: '-1',
              response: json
            })
            if (this.canAlert) {
                Alert.alert('',
                    `网络异常，请重试`
                );
                this.canAlert = false
            }
            return {
                code: -999,
                message: '网络异常，请重试',
                data:{}
            }
        }
    }
}

const http = new Http();

export default http;
