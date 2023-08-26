import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Expense } from '../expense.model';
import { ExpenseModalDto } from './expense-modal.dto';

@Component({
  selector: 'ea-expense-modal',
  templateUrl: './expense-modal.component.html',
})
export class ExpenseModalComponent implements OnInit {
  expenseForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    amount: ['', Validators.required],
    category: ['', Validators.required],
  });

  @Input() expense: Expense | undefined;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.expense) {
      this.expenseForm.setValue({
        name: this.expense.name,
        description: this.expense.description,
        amount: this.expense.amount.toString(),
        category: this.expense.category,
      });
    }
  }

  get name(): FormControl {
    return this.expenseForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.expenseForm.get('description') as FormControl;
  }

  get amount(): FormControl {
    return this.expenseForm.get('amount') as FormControl;
  }

  get category(): FormControl {
    return this.expenseForm.get('category') as FormControl;
  }

  onSubmit() {
    if (
      this.expense &&
      this.expense.expenseid &&
      this.expense.expenseid !== -1
    ) {
      this.onSave.emit(
        ExpenseModalDto.update(this.expense.expenseid, this.expenseForm.value)
      );
    } else {
      this.onSave.emit(ExpenseModalDto.create(this.expenseForm.value));
    }
  }

  onClose() {
    this.onCancel.emit();
  }
}
