import React, { useState } from "react"
import {uuid} from "uuidv4"
import {CardContainer} from "../styles/orderInput"

import logo from "../assets/images/logo.png"
import { store } from "../services/connections/dbConnection"
import IorderItem from "../models/OrdersTypes"

// const dropList = [
// 	{ value: "Ifood", label: "Ifood" },
// 	{ value: "Cartão", label: "Cartão" },
// 	{ value: "Dinheiro", label: "Dinheiro" }
// ]

export default function OrderInput(){
	const [nameInput, setNameInput] = useState("")
	const [paymentInput, setPaymentInput] = useState("")
	const [totalInput, setTotalInput] = useState("")

	function handleSentOrder(){
		const list = store.get("orders")	
		const orderList:IorderItem[] = JSON.parse(list)
		const orderItem = {
			id: uuid(),
			customer: nameInput,
			orderTime: Date.now(),
			paymentMethod: paymentInput,
			total: totalInput,
			status: "Andamento" 
		}

		console.log(orderList)
		store.set("orders",JSON.stringify([...orderList,orderItem]))

	}


	return( 
		<>
			<CardContainer>
				
				<input type="text" id="nameInput" value={nameInput} onChange={e => {setNameInput(e.target.value)}} placeholder="Nome"></input>
				<div>
					<input type="text" id="paymentInput" value={paymentInput} onChange={e => {setPaymentInput(e.target.value)}} placeholder="Pagamento"></input>
					<input type="number" id="totalInput" value={totalInput} onChange={e => {setTotalInput(e.target.value)}} placeholder="Total"></input> 
				</div>
				<button id="sendButton" onClick={handleSentOrder}>Enviar</button>
	
				<img id="logo"src={logo} alt="Logo"></img> 
			</CardContainer>
			{/* <DivForm>
      <PaymentDropdown options = {dropList}/>
  </DivForm> */}
		</>
	) 
}