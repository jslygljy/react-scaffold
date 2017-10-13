import RegisterStore from './register.store';
import {
    observable,
    action,
    autorun
} from 'mobx';

export default class RegisterAction extends RegisterStore {
  constructor() {
    super();
  }

  @action
  updateUsername(username){
    console.log(username);
    this.username = username;
  }

  @action
  updatePassword(password) {
    this.password = password;
  }
}