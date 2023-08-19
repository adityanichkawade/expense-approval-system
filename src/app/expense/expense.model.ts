export class Expense {
  constructor(
    public id: number = -1,
    public name: string,
    public amount: number,
    public category: string,
    public status: string,
    public description: string
  ) {}
}
