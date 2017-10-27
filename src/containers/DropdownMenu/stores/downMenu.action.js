import DownMenuStore from './downMenu.store';
import {
    observable,
    action,
    autorun
} from 'mobx';

export default class DownMenuAction extends DownMenuStore {
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