import ButtonStore from './button.store';
import {
    observable,
    action,
    autorun
} from 'mobx';

export default class ButtonAction extends ButtonStore {
  constructor() {
    super();
  }
}