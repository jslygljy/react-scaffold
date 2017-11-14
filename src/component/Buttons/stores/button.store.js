import {
  observable,
  action,
  autorun,
  computed
} from 'mobx';

export default class ButtonStore {
  constructor() {
    autorun(()=>{
    })
  }
  
  @observable Search = 'Search';
  
}