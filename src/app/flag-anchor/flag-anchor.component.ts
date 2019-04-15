import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flag-anchor',
  templateUrl: './flag-anchor.component.html',
  styleUrls: ['./flag-anchor.component.less']
})
export class FlagAnchorComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
