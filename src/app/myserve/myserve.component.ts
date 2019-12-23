import { Component, OnInit } from '@angular/core';
import { MyserveService } from '../myserve.service';

@Component({
  selector: 'app-myserve',
  templateUrl: './myserve.component.html',
  styleUrls: ['./myserve.component.css']
})
export class MyserveComponent implements OnInit {

  constructor(private service:MyserveService) { }

  ngOnInit() {
    this.service.aa();
  }

}
