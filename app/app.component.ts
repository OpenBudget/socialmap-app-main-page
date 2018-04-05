import {Component, ViewChild} from '@angular/core';
import { BudgetKeyMainPageService } from './services';

@Component({
  selector: 'my-app',
  template: ` 
      <budgetkey-container [showHeader]="true" [showSearchBar]="true">
        <div class="container-fluid scroll" style="position: relative">
            <div class="non-sticky">
              <budgetkey-main-page-summary [amount]="totalAmount" [year]="year"></budgetkey-main-page-summary>
              <div class="text-center">
              </div>
            </div>
            
            <div class="after">
            </div>

        </div>
      </budgetkey-container>
  `,
})
export class AppComponent {

  private funcCategories: any[];
  private econCategories: any[];
  private incomeCategories: any[];
  private totalAmount: number = 0;
  private year: number;

  constructor(private mainPage: BudgetKeyMainPageService) {
    this.mainPage.getBubblesData().then((bubbles) => {
      this.year = bubbles.year;
      this.funcCategories = bubbles.func;
      this.econCategories = bubbles.econ;
      this.incomeCategories = bubbles.income;
      this.totalAmount = 0;
      this.funcCategories.forEach((category: any) => {
        this.totalAmount += category.amount;
      });
    });
  }
}
