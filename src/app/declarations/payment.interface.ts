export default interface IPayment {
  name: string;
  daycost: number;
  assign: Map<number, boolean>;
}
