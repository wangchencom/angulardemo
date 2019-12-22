import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // ab: boolean = false;
  aa = true;
  bb = 'woshshsa';
  cc = 1;
  imgs = './assets/img/logo.png';
  color = 'red';
  change = true;
  per = 0.2;
  today =  Date.now();
  salary = 200;

  cca(event: any) {
    if (event.target.type === 'button') {
      alert(' 你惦记了一个按钮 按钮名字是： ' + event.target.value);
    }
  }
  ch() {
    console.log('123');
    alert('ssaa');
  }
  daaa: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      // function(data) {
      //   alert(data.get('name'));
      // }
      data => this.daaa = data.get('uname')
    );
  }
}
