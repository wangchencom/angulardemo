import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chastu',
  templateUrl: './chastu.component.html',
  styleUrls: ['./chastu.component.css']
})
export class ChastuComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  //储存查询结果
  stuList: any;
  url = 'http://xt-jiaoshiji:8080/StuManager/stu/getStu';
  ngOnInit() {
    this.http.get(this.url).subscribe(data => this.stuList = data);
  }
}
