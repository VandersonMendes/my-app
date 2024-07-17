export interface DataCreate {
  nome: string;
  email: string;
  company: string;
}

export interface DataAvance extends DataCreate {
  cnpj: number;
  password: string,
}
