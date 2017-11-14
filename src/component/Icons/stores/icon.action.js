import IconStore from './icon.store';
import {
    observable,
    action
} from 'mobx';

export default class IconAction extends IconStore {
    constructor() {
        super();
    }
    @observable test = '';

    @action testfunction() {
        this.test = 'test';
    }
}