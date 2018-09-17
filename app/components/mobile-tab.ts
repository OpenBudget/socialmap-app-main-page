import {Component} from '@angular/core';

@Component({
  selector: 'mobile-tab',
  template: ` 
  <ng-content select='.anchor'></ng-content>
  <div class='more-info' (click)='toggle()'>
    <a>מידע נוסף</a>
    <i class='glyphicon glyphicon-chevron-left' *ngIf='!visible'></i>
    <i class='glyphicon glyphicon-chevron-down' *ngIf='visible'></i>
  </div>
  <ng-content *ngIf='visible'></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      border-bottom: 1px solid #EFEFEF;
    }

    .more-info {
      height: 56px;
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
      border-top: 1px solid #EFEFEF;
      box-shadow: 0 -4px 8px -5px rgba(0,0,0,0.08), 5px 8px 18px 0 rgba(0,0,0,0.07);
    }

    .more-info a {
      color: #5A32D1;	
      font-family: "Abraham TRIAL";	
      font-size: 20px;
      line-height: 28px;
      display: inline-block;
    }

    .more-info i {
      margin-right: auto;
      color: #FE8255;
      font-size: 20px;
      line-height: 28px;
      display: inline-block;
      padding-bottom: 5px;
    }
  `]
})
export class MobileTab {

  private visible = false;

  constructor() {
  }

  toggle() {
    this.visible = !this.visible;
  }
}
