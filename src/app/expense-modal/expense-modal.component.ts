import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-expense-modal',
  templateUrl: './expense-modal.component.html',
})
export class ExpenseModalComponent implements OnInit {
  @Input() onSave = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
