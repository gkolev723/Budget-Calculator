import { Component, OnInit } from '@angular/core';
import {BudgetItemModel} from '../shared/models/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItemModel) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItemModel) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
   this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

   this.totalBudget -= updateEvent.old.amount;
   this.totalBudget += updateEvent.new.amount;
  }
}
