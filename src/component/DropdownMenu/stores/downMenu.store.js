import {
  observable,
  action,
  autorun,
  computed
} from 'mobx';
export default class DownMenuStore {
  constructor() {
    autorun(()=>{
    })
  }
  
    @observable maths = ['1st menu item','2nd menu item','3d menu item']



}