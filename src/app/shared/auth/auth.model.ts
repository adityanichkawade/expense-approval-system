export interface Auth {
  status: string;
  statusCode: Number;
  data: {
    token: string;
  };
}
