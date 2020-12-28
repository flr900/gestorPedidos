import React from "react"

import {arrayList} from "../assets/suport"

import {DivContainer, ListItem} from "../styles/orderList"


export default function OrderList (){
	return(
		<DivContainer>
			<div className="wrapper">
				{arrayList.map(item =>{
					return(
						<ListItem key={item.id}>
							<div className="itemIdentifier">
								<h3>{item.orderTime}</h3>
								<strong>{item.customer}</strong>
							</div>
							<div className="itemDetails">
								<h3>{item.paymentMethod}</h3>
								<h3>{item.total}</h3>
								<h3>{item.status}</h3>
							</div>
						</ListItem>
					)
				})}
			</div>
		</DivContainer>
	)
}

