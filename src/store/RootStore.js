/**
 * 后台管理系统的状态
 *
 * 包括:
 * 主题/menu状态/...等
 * */
import { action,observable,} from 'mobx'

export default class OrderLine {
   //'zh-CN','en-US'
  @observable language:string = 'zh-CN'; 

  @action 
  changeLanguage(){

  }
}