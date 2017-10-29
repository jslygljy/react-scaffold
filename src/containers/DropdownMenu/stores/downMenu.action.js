import DownMenuStore from './downMenu.store';
import {
    observable,
    action
} from 'mobx';

export default class DownMenuAction extends DownMenuStore {
    constructor() {
        super();
    }
    @observable test = '';

    @action testfunction() {
        this.test = 'test';
    }
}