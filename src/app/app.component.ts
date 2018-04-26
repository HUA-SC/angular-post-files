import { Component } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import "rxjs/add/observable/timer";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/operator/do";
import "rxjs/add/operator/count";
import 'rxjs/add/observable/fromEvent';
import "rxjs/add/operator/take";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/share";
import "rxjs/add/operator/shareReplay";

import {VERSION} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public appDef: AppNs.AppDef = {
    version: VERSION.full,
    author: 'Paul Lan',
  };
  constructor(){
    
  }

  public ngOnInit() {

  }

}
