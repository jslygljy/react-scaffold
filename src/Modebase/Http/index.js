import _ from "lodash/object";
import axios from 'axios';

class Http {

  get(options) {
    const {
      url,
      params,
      headers
    } = options;
    let newParmas = _.assign({}, params);
    const api = `${url}${newParmas}`;
    return axios.get(api)
      .then((data)=> {
        return {
          json: ()=>{return data}
        }
      })
      .catch((error)=> {
        return Promise.reject(error);
      });
  }

  post(options) {
    const {
      url,
      params
    } = options;
    console.log(params)
    const api = `${url}`;
    return axios({
      url: api,
      method: 'POST',
      mode:'no-cors',
      data: params,
    })
    .then((data)=> {
      return {
        json: ()=>{return data}
      }
    })
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Http();
    }
    return this.instance;
  }
}

const http = Http.getInstance();
export default http;



function _jsonToQueryString(json) {
  return '?' +
    Object.keys(json).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
}
