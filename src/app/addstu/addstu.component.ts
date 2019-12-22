import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstu',
  templateUrl: './addstu.component.html',
  styleUrls: ['./addstu.component.css']
})
export class AddstuComponent implements OnInit {

  url = 'http://xt-jiaoshiji:8080/StuManager/stu/addStu';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  add(a: any) {
    this.http.post( this.url, a).subscribe(
      data => {
        if (data > 0) { alert('添加成功xiao'); }
      }
    );
  }
}
