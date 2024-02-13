import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoggingServices } from './logging-service';

import { AppState } from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  //   Custom property binding example
  // serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}]
    constructor(private store: Store<AppState>, private loggingService: LoggingServices){}
  ngOnInit(): void {
      this.store.dispatch(new AuthActions.AutoLogin())
      this.loggingService.printLog('Hello from App Component ngOnInit')
  }
}
