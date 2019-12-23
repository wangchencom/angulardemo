import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AddstuComponent } from './addstu/addstu.component';
import { ChastuComponent } from './chastu/chastu.component';
import { MyserveComponent } from './myserve/myserve.component';

const routes: Routes = [
  {path: 'index/:uname', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'one/:name', component: OneComponent},
  {path: 'two', component: TwoComponent},
  // {path: 'addstu', component: AddstuComponent}
  {path: 'addstus', component: AddstuComponent},
  {path: 'chastu', component: ChastuComponent},
  {path: 'myserve',component: MyserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
