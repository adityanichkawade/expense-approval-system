import { Component, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';
import {
  EXPENSE_ACTIONS,
  EXPENSE_CATEGORIES,
  EXPENSE_STATUS,
} from './expense.config';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ea-expense',
  templateUrl: './expense.component.html',
})
export class ExpenseComponent implements OnInit {
  open: boolean = false;
  expenses: Expense[] = [];
  currentExpense: Expense | undefined;

  constructor(
    private authService: AuthService,
    private expenseService: ExpenseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchExpenses();
  }

  fetchExpenses() {
    this.expenseService.getAllByUser().subscribe((res: any) => {
      this.expenses = res.data;
    });
  }

  onLogout() {
    this.authService.logout().subscribe((token) => {
      this.router.navigate(['/']);
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

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

  onAdd() {
    this.openModal();
  }

  onEdit(id: number) {
    const expense = this.expenses.find((expense) => expense.expenseid === id);
    this.currentExpense = expense;
    this.openModal();
  }

  onSubmit(id: number) {
    this.expenseService.submit(id).subscribe((res) => {
      this.fetchExpenses();
    });
  }

  onSave(expense: Expense) {
    if (expense.expenseid !== -1) {
      this.expenseService.update(expense).subscribe((res) => {
        this.closeModal();
        this.fetchExpenses();
      });
    } else {
      this.expenseService.create(expense).subscribe((res) => {
        this.closeModal();
        this.fetchExpenses();
      });
    }
  }

  onCancel() {
    this.closeModal();
  }
}
