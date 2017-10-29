import ButtonStore from './button.store';
import {
    observable,
    action
} from 'mobx';

export default class ButtonAction extends ButtonStore {
  constructor() {
    super();
  }
  @observable test = '';

  @action testfunction() {
      this.test = 'test';
  }
}