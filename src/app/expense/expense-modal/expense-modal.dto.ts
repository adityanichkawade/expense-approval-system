import { Expense } from '../expense.model';

export class ExpenseModalDto {
  static create(formData: any): Expense {
    return new Expense(
      formData.expenseid,
      formData.name,
      formData.amount,
      formData.category,
      formData.description
    );
  }
  static update(id: number, formData: any): Expense {
    return new Expense(
      id,
      formData.name,
      formData.amount,
      formData.category,
      formData.description
    );
  }
}
