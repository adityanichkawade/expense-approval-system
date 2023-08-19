import { Component, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';
import {
  EXPENSE_ACTIONS,
  EXPENSE_CATEGORIES,
  EXPENSE_STATUS,
} from './expense.config';

@Component({
  selector: 'ea-expense',
  templateUrl: './expense.component.html',
})
export class ExpenseComponent implements OnInit {
  open: boolean = false;
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getAll().subscribe((res: any) => {
      this.expenses = res.data;
    });
  }

  getCategory(category: string) {
    return EXPENSE_CATEGORIES[category] || '';
  }

  getStatus(status: string) {
    return EXPENSE_STATUS[status] || '';
  }

  canShowButton(status: string, action: string) {
    return EXPENSE_ACTIONS[status].includes(action);
  }

  onAdd() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  onSave(expense: Expense) {
    this.close();
  }

  onCancel() {
    this.close();
  }
}
