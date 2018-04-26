import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TestComponent} from './test';
import {TestService} from './test/test.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
  providers: [TestService]
})
export class AppModule {
}
