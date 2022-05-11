export interface TableData {
  name: string;
  age: number;
  job: string;
  employed: boolean;
}

export interface TableHeaders {
  key: keyof TableData;
  label: string;
}
