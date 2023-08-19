import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  @Input() open = false;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

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
    this.onSave.emit(this.expenseForm.value);
  }

  onClose() {
    this.onCancel.emit();
  }
}
