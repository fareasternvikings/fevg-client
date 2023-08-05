import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify'
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
  TuiSvgModule,
  tuiSvgOptionsProvider,
} from '@taiga-ui/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {PageHeaderModule} from './shared/components/page-header/page-header.module'
import {AuthModule} from './auth/auth.module'
import {TuiLetModule} from '@taiga-ui/cdk'
import {HeroModule} from './index/components/hero/hero.module'
import {PageFooterModule} from './shared/components/page-footer/page-footer.module'
import {CartModule} from './cart/cart.module'
import {reducers} from './store/reducers'
import {effects} from './store/effects'
import {ProductsService} from './shared/services/products.service'
import {DIALOG_PROVIDER} from './shared/components/dialog/dialog.service'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './shared/services/auth-interceptor.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageHeaderModule,
    AuthModule.forRoot(),
    CartModule.forRoot(),
    TuiDialogModule,
    TuiRootModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiLetModule,
    HeroModule,
    PageFooterModule,
    TuiSvgModule,
  ],
  providers: [
    ProductsService,
    DIALOG_PROVIDER,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    tuiSvgOptionsProvider({
      srcProcessor: (src) => {
        const myCustomPrefix = 'icons::'

        return String(src).startsWith(myCustomPrefix)
          ? `assets/icons/${String(src).replace(myCustomPrefix, '')}.svg`
          : src
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
