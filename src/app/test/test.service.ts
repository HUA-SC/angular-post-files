import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';


@Injectable()
export class TestService {
  constructor(private http: Http) {
  }

  private url = 'http://118.24.83.20:3001';
  // private url = 'http://127.0.0.1:3001';


  /**
   * 解释：在angular中默认使用application/json格式提交
   * 若是需要提交其他格式可以在header中定义。
   *
   * 但是：若是需要提交多文件，不可再header中将Content-type写为multipart/form-data
   * 原因是：若是显示的写为multipart/form-data，将不会在header中自动生成boundary字段，这样文件将无法被接收
   * 解决方法：不写header！ angular会自动是被当前提交格式，并自动添加头部。
   * 注意：此时需要使用let formData = new FormData();的方式来存储发送数据，表示以表单格式传输数据
   *
   *
   * @param data
   * @returns {Promise<any>}
   */
  sub(data): Promise<any> {

    let formData = new FormData();
    formData.append('user_id', '5ae0129ee0353d06c3248538');
    formData.append('content', '???454');
    formData.append('courseId', '5ae13334da48a502006ede91');
    formData.append('title', '提问测试');
    for (let img of data) {
      formData.append('img', img);
    }
    return this.http
      .post(this.url + '/add/question',
        formData,{withCredentials:true})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * 在angular5中，@angular/http貌似被废弃了，改为使用@angular/common/http方式
   * 使用@angular/http时，需要在app.module上imports:[HttpModule]  ,导入import {HttpModule} from '@angular/http';
   *
   * 使用@angular/common/http时，需要在app.module上imports:[HttpClientModule]  ,导入import {HttpClientModule} from '@angular/common/http';
   * 代码如下
   * */
  // import {HttpClient} from '@angular/common/http';
  // constructor(private http: HttpClient) {
  // }
  //
  // private url = 'http://118.24.83.20:3001';
  //
  //
  // sub(data) {
  //   let formData = new FormData();
  //   formData.append('user_id', '5ae0129ee0353d06c3248538');
  //   formData.append('content', '???454');
  //   formData.append('courseId', '5ae13334da48a502006ede91');
  //   for (let img of data) {
  //     formData.append('img', img);
  //   }
  //   return this.http
  //     .post(this.url + '/add/question',
  //       formData)
  //     .then(res => res.json())
  // }


  log(user,password){
    return this.http
      .post(this.url+'/login',{user:user,password:password},{withCredentials:true})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  querySession(){
    return this.http
      .post(this.url+'/query/session',{},{withCredentials:true})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  logout(){
    return this.http
      .get(this.url+'/logOut',{withCredentials:true})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
}
