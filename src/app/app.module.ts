import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleComponent } from './emple/emple.component';
import { IndexComponent } from './index/index.component';
import { HtComponent } from './ht/ht.component';
import { TouComponent } from './tou/tou.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
// 表单mod
import { FormsModule } from '@angular/forms';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AddstuComponent } from './addstu/addstu.component';
// httpClinent mod
import { HttpClientModule } from '@angular/common/http';
import { ChastuComponent } from './chastu/chastu.component';
import { MyserveComponent } from './myserve/myserve.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleComponent,
    IndexComponent,
    HtComponent,
    TouComponent,
    MenuComponent,
    LoginComponent,
    OneComponent,
    TwoComponent,
    AddstuComponent,
    ChastuComponent,
    MyserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
