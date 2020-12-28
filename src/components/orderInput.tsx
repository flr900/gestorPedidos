import React from "react"
import {CardContainer} from "../styles/orderInput"

import logo from "../assets/images/logo.png"

// const dropList = [
// 	{ value: "Ifood", label: "Ifood" },
// 	{ value: "Cartão", label: "Cartão" },
// 	{ value: "Dinheiro", label: "Dinheiro" }
// ]

export default function OrderInput(){
	return(
		<>
			<CardContainer>
				<input type="text" id="nameInput"></input>
				<div>
					<input type="text" id="paymentInput"></input>
					<input type="number" id="totalInput"></input> 
				</div>
				<button id="sendButton">Enviar</button>
				<img id="logo"src={logo} alt="Logo"></img> 
			</CardContainer>
			{/* <DivForm>
      <PaymentDropdown options = {dropList}/>
  </DivForm> */}
		</>
	) 
}