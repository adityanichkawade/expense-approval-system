import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { EXPENSE_API_ENDPOINTS } from './expense.config';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get(EXPENSE_API_ENDPOINTS.expenses.get.url)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(() => error);
  }
}
