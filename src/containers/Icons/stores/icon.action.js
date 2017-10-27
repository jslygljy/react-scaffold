import IconStore from './icon.store';
import {
    observable,
    action,
    autorun
} from 'mobx';

export default class IconAction extends IconStore {
  constructor() {
    super();
  }
}