export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  company: {
    catchPhrase: string;
  };
}
