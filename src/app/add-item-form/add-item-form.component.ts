import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BudgetItemModel} from '../shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItemModel ;
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();
  isNewItem: boolean;
  constructor() { }

  ngOnInit(): void {
    // if item has value
    if(this.item) {
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
      this.item = new BudgetItemModel('', null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
