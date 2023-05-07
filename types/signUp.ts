export interface SignUpProps { 
    name: string;
    email: string;
    password: string;
    race: string;
    birthday: string;
    gender: string;
    disabilities?: string[] | null;
}
  