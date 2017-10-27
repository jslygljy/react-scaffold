import PageinationStore from './pageination.store';
import {
    observable,
    action,
    autorun
} from 'mobx';

export default class PageinationAction extends PageinationStore {
  constructor() {
    super();
  }
}