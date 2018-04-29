import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
      <budgetkey-container [showHeader]="true" [showSearchBar]="true">
        <div class="container-fluid scroll" style="position: relative">
          <h1>Hello Social Map!</h1>
        </div>
      </budgetkey-container>
  `,
})
export class AppComponent {
  constructor() {
  }
}
