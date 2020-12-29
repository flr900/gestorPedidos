export default interface IorderItem{
  id:string;
  orderTime: Date;
  customer: string;
  paymentMethod: string;
  total: string;
  status: string;
}