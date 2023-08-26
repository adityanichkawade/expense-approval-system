import { environment } from 'src/environments/environment';

export const EXPENSE_API_ENDPOINTS = {
  users: {
    get: {
      url: `${environment.apiUrl}/api/users/expenses`,
    },
    post: {
      url: `${environment.apiUrl}/api/users/expenses`,
    },
    put: {
      url: `${environment.apiUrl}/api/users/expenses`,
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
