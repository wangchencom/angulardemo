import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tou',
  templateUrl: './tou.component.html',
  styleUrls: ['./tou.component.css']
})
export class TouComponent implements OnInit {
  img = './assets/img/logo.png';
  constructor(private router: ActivatedRoute) { }

  daaa: string;
  id: string;
  name: string;
  ngOnInit() {
    this.router.paramMap.subscribe(
      // function(data) {
      //   alert(data.get('name'));
      // }
      data => this.daaa = data.get('uname')
    );
  }

}
