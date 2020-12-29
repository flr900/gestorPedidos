import React, {useEffect, useState} from "react"
import {DivContainer, ListItem} from "../styles/orderList"

import {clear} from "../services/dbCrud"

import IorderItem from "../models/OrdersTypes"
import { store } from "../services/connections/dbConnection"

import {AiFillDelete } from "react-icons/ai"


export default function OrderList (){
	const [itemList,setItemList] = useState<IorderItem[]>([])
	let refresh = false

	useEffect(() => {
		const list = store.get("orders")
		const orderList:IorderItem[] = JSON.parse(list)
		console.log(list)
		setItemList(orderList)
	},[refresh])
  

	function handleStatus (id:string){
		
		const newItemList = itemList.map( item => {
			if (item.id === id) {
				switch(item.status){
				case "Andamento":
					return {...item, status: "Finalizado"}
					break
				// case "Enviado":
				// 	return {...item, status: "Finalizado"}
				// 	break
				default:
					return {...item, status:"Andamento"}
				}
			} else {
				return item
			}
		})
		

		setItemList(newItemList)
	}

	function handleDeletion () {
		clear()
		refresh = !refresh
		console.log(refresh)
	}


	return(
		<>
			<DivContainer>
				<div className="wrapper">
					{itemList.map(item =>{
						return(
							<ListItem onClick={() => handleStatus(item.id)} key={item.id} theme={item.status}>
								<div className="itemIdentifier">
									<h3>{item.orderTime.getTime}</h3>
									<strong>{item.customer}</strong>
								</div>
								<div className="itemDetails">
									<h3>{item.paymentMethod}</h3>
									<h3>{ new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(item.total))}</h3>
									<h3>{item.status}</h3>
								</div>
							</ListItem>
						)
					})}
				</div>
			</DivContainer>
			<a onClick={handleDeletion}><AiFillDelete color="white"/></a>
		</>
	)
}

