export class Expense {
  constructor(
    public expenseid: number = -1,
    public name: string = '',
    public amount: number = -1,
    public category: string = '',
    public description: string = '',
    public createdBy: string = '',
    public status: string = ''
  ) {}
}
