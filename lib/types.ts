export type Option = {
  value: string;
  label: string;
};

export type Service = {
  id: number;
  name: string;
  description?: string;
  type: string;
  price: number;
  oldPrice?: number;
  images?: string[];
  reservationsCount?: number;
};

export type Reservation = {
  services: string[];
  name: string;
  phone: string;
  period: string;
};