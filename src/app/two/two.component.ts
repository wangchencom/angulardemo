import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  id: string;
  name: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParamMap.subscribe(
      data => {
        this.id = data.get('id');
        this.name = data.get('name');
      }
    );
  }
}
