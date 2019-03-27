export default interface IPayment {
  id: number;
  name: string;
  daycost: number;
  assign: Map<number, boolean>;
}
