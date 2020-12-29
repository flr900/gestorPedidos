
interface IorderItem{
  id:string;
  orderTime: number;
  customer: string;
  paymentMethod: string;
  total: string;
  status: string;
}

export const arrayList:IorderItem[] = [
 
	{
		id:"1",
		orderTime: 1942,
		customer: "Felipe Leite Rodrigues",
		paymentMethod:"Cartão",
		total:"38",
		status: "Andamento"
	}
] 