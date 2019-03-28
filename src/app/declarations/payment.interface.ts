export default interface IPayment {
  id?: number;
  name: string;
  daycost: number;
  assign?: {[key: number]: boolean};
}
