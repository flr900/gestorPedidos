import React, {useEffect, useState} from "react"

import {arrayList} from "../assets/suport"

import {DivContainer, ListItem} from "../styles/orderList"



export default function OrderList (){
	const [itemList,setItemList] = useState(arrayList)
  
	function handleStatus(id:string){
		const newItemList = itemList.map( item => {
			  	if(item.id == id) {
		   		id.status = "Finalizado"
	   	  }
		  }
		)
		setItemList(newItemList)
		
	}

	return(
		<DivContainer>
			<div className="wrapper">
				{itemList.map(item =>{
					return(
						<ListItem onClick={handleStatus(item.id)}  key={item.id}>
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

