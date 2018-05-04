
import {Component} from '@angular/core';

import {TestService} from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor( private testService: TestService) {}

  sub(d) {
    console.log(d);
    this.testService.sub(d).then(res => {
      console.log('表单提交返回数据：',res);
    });
  }
  log(user,pwd){
    this.testService.log(user,pwd).then(res =>{
      console.log('登录返回数据：',res);
    })
  }

  querySession(){
    this.testService.querySession().then(res =>{
      console.log('请求的session数据：',res);
    })
  }
  logout(){
    this.testService.logout().then(res =>{
      console.log('登出返回的数据：',res);
    })
  }


}
