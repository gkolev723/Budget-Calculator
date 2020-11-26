import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItemModel} from '../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

 @Input() item: BudgetItemModel;
 @Output() xButtonClick: EventEmitter<unknown> = new EventEmitter<unknown>();
 @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
   this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
