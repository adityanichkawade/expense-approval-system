export const EXPENSE_API_ENDPOINTS = {
  expenses: {
    get: {
      url: '/assets/expenses.json',
    },
  },
};

export const EXPENSE_CATEGORIES: { [key: string]: string } = {
  food: 'Food',
  housing: 'Housing',
  rent: 'Rent',
  bill: 'Bill',
  transportation: 'Transportation',
  taxes: 'Taxes',
};

export const EXPENSE_STATUS: { [key: string]: string } = {
  draft: 'Draft',
  approved: 'Approved',
  pending: 'Pending',
};

export const EXPENSE_ACTIONS: { [key: string]: Array<string> } = {
  draft: ['edit', 'delete', 'submit'],
  approved: [],
  pending: ['delete'],
};
