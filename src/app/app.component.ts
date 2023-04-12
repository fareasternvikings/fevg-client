import {Component} from '@angular/core'
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fevg-client'

  constructor() {
    console.log('API_URL: ', environment.apiUrl)
  }
}
