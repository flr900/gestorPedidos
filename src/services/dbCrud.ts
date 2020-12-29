import {store} from "./connections/dbConnection"

import IorderItem from"../models/OrdersTypes"



export function get():IorderItem[]{
	const list = store.get("orders")
	const orderList = JSON.parse(list)
	console.log(orderList)
	return orderList
}

export function set(orderItem:IorderItem):void{
	const list = store.get("orders")	
	const orderList = JSON.parse(list)
	console.log(orderList)
	store.set("orders",JSON.stringify([...orderList,orderItem]))
}

export function clear():void{
	store.set("orders",JSON.stringify([]))
}


// export default class db {
// 	orderList:IorderItem[]
// 	constructor(){
// 		this.orderList = JSON.parse(store.get("orders"))
// 	}

// 	public set(orderItem:IorderItem):void{
// 		console.log(this.orderList)
// 		store.set("orders",JSON.stringify([...this.orderList,orderItem]))
// 	}

// 	public get():IorderItem[]{
// 		return this.orderList
// 	}

// } 

