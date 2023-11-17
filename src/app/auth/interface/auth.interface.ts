export interface Login {
  refresh: string;
  access: string;
  user_id: number;
  rol: boolean;

}

export interface Register {
  user_name:    string;
  name:         string;
  last_name:    string;
  email:        string;
  number_phone: string;
}

