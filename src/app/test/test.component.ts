
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
      console.log('--------------result8sadfa------------');
      console.log(res);
    });
  }

}
