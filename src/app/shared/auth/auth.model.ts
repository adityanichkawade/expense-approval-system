export interface Auth {
  status: string;
  statusCode: Number;
  data: {
    token: string;
  };
}

export interface AuthUser {
  username: string;
  token: string;
}
