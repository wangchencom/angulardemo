import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router: Router) {}

  login(data: any) {
    if (data.username === '123' && data.password === '123') {
         // 使用路由器导航到首页
         this.router.navigate(['/index', data.username]);
  }}
}
