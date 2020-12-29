import React, { useState } from "react"
import {uuid} from "uuidv4"
import {CardContainer} from "../styles/orderInput"

import {set} from"../services/dbCrud"

import {store} from "../services/connections/dbConnection"

import logo from "../assets/images/logo.png"

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
		const orderItem = {
			id: uuid(),
			customer: nameInput,
			orderTime: Date.now(),
			paymentMethod: paymentInput,
			total: totalInput,
			status: "Andamento" 
		}

		set(orderItem)

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