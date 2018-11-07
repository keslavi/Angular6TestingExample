import { Component } from '@angular/core';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingsample';
  vm = { api : null}

  constructor (private svc: ExampleService){}

  btnCallService() {
  	this.svc.get().subscribe(res=> this.vm['res'] = res);
  }
}
