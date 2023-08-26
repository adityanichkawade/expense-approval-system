import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { EXPENSE_API_ENDPOINTS } from './expense.config';
import { Expense } from './expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  constructor(private httpClient: HttpClient) {}

  getAllByUser() {
    return this.httpClient
      .get(EXPENSE_API_ENDPOINTS.users.get.url)
      .pipe(catchError(this.handleError));
  }

  create(expense: Expense) {
    return this.httpClient
      .post(EXPENSE_API_ENDPOINTS.users.post.url, expense)
      .pipe(catchError(this.handleError));
  }

  update(expense: Expense) {
    return this.httpClient
      .put(EXPENSE_API_ENDPOINTS.users.put.url, expense)
      .pipe(catchError(this.handleError));
  }

  submit(expenseid: number) {
    return this.httpClient
      .put(EXPENSE_API_ENDPOINTS.users.put.url, {
        expenseid,
        status: 'pending',
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(() => error);
  }
}
