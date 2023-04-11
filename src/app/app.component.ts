import {Component, OnInit} from '@angular/core'
import {environment} from '../environments/environment'
import {HelloService} from './shared/services/hello.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fevg-client'

  constructor(private helloService: HelloService) {
    console.log('API_URL: ', environment.apiUrl)
  }

  ngOnInit() {
    this.helloService.sayHello()
  }
}
