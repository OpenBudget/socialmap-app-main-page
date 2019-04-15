import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coins-anchor',
  templateUrl: './coins-anchor.component.html',
  styleUrls: ['./coins-anchor.component.less']
})
export class CoinsAnchorComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
