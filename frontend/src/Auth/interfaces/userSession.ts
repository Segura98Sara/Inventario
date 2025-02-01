export interface UserSession {
  email: string;
  name: string;
  phone: string;
  isLogged: boolean,
}

export interface NewUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
}