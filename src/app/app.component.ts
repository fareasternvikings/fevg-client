import {Component, OnInit} from '@angular/core'
import {environment} from '../environments/environment'
import {HelloService} from './shared/services/hello.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fevg-client'

  constructor(private helloService: HelloService) {
    console.log('API_URL: ', environment.apiUrl)
    console.log('SERVER_IP: ', environment.serverIp)
  }

  ngOnInit() {
    this.helloService.sayHello()
  }
}
