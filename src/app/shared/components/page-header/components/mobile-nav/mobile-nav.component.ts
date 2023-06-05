import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isMobileMenuOpenedSelector} from '../../../../../store/global/selectors'
import {closeMobileMenuAction} from '../../../../../store/global/actions/mobile-menu.action'

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavComponent implements OnInit {
  isMobileMenuOpened$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isMobileMenuOpened$ = this.store.select(isMobileMenuOpenedSelector)
  }

  close() {
    this.store.dispatch(closeMobileMenuAction())
  }
}
