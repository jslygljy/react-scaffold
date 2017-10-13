import {
  observable,
  action,
  autorun,
  computed
} from 'mobx';

export default class RegisterStore {
  constructor() {
    autorun(()=>{
      console.log(this.username);
    })
  }
  
  @observable username = '';
  @observable password = '';
  
}