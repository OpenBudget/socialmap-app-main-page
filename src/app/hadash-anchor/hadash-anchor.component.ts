import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hadash-anchor',
  templateUrl: './hadash-anchor.component.html',
  styleUrls: ['./hadash-anchor.component.less']
})
export class HadashAnchorComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
