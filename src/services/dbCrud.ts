import {store} from "./connections/dbConnection"


export interface IorderItem{
  id:string;
  orderTime: number;
  customer: string;
  paymentMethod: string;
  total: string;
  status: string;
}


export function set(orderItem:IorderItem){
	const orderList = JSON.parse(store.get("orders"))
	console.log(orderList)
	store.set("orders",JSON.stringify([...orderList,orderItem]))
}