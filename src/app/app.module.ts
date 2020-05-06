import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { TestresolveService } from './testresolve.service';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { DemoMaterialModule } from './material-module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutWirthlinComponent } from './components/about-wirthlin/about-wirthlin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProspectsComponent } from './components/prospects/prospects.component';
import { RepresentationsComponent } from './components/representations/representations.component';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '',
    defaults: {
      title: '',
      description: '',
      'og:image': '',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}
// export function translateLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutWirthlinComponent,
    ContactUsComponent,
    ProspectsComponent,
    RepresentationsComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserAnimationsModule,
    MetaModule.forRoot(
      {
      provide: MetaLoader,
      useFactory: (metaFactory),
      // deps: [TranslateService]
    }
    ),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule,
  ],
  providers: [
    CookieService,TestresolveService,ApiService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public http: HttpClient, public router: Router) {
  //  this.router.navigateByUrl('/')
  }

}
