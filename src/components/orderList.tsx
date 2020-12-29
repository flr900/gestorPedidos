import React, {useEffect, useState, MouseEvent} from "react"

import {arrayList} from "../assets/suport"

import {DivContainer, ListItem} from "../styles/orderList"


export default function OrderList (){
	const [itemList,setItemList] = useState(arrayList)

	useEffect(() => {
		setItemList(arrayList)
	},[])
  

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


	return(
		<DivContainer>
			<div className="wrapper">
				{itemList.map(item =>{
					return(
						<ListItem onClick={() => handleStatus(item.id)} key={item.id} theme={item.status}>
							<div className="itemIdentifier">
								<h3>{item.orderTime}</h3>
								<strong>{item.customer}</strong>
							</div>
							<div className="itemDetails">
								<h3>{item.paymentMethod}</h3>
								<h3>{ new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.total)}</h3>
								<h3>{item.status}</h3>
							</div>
						</ListItem>
					)
				})}
			</div>
		</DivContainer>
	)
}

