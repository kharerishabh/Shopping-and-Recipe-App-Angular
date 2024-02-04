import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingServices } from './logging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  //   Custom property binding example
  // serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}]
    constructor(private authService: AuthService, private loggingService: LoggingServices){}
  ngOnInit(): void {
      this.authService.autoLogin()
      this.loggingService.printLog('Hello from App Component ngOnInit')
  }
}
