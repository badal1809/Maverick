import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomeService } from './core/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { CardOverviewComponent } from './pages/card-overview/card-overview.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment.prod';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './core/services/auth.service';


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    Error404PageComponent,
    AppComponent,
    CardOverviewComponent,
    
  ],
  providers: [
    HomeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
