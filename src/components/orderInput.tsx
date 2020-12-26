import React from 'react'
import {CardContainer, PaymentDropdown, DivForm} from '../styles/orderInput'

const dropList = [
  { value: 'Ifood', label: 'Ifood' },
  { value: 'Cartão', label: 'Cartão' },
  { value: 'Dinheiro', label: 'Dinheiro' }
]

function OrderInput(){
return(
  <>
  <CardContainer>
    <input type="text" id="nameInput"></input>
    <div>
      <input type="text" id="totalInput"></input>
      <input type="text" id="totalInput"></input> 
    </div>
    <button id="sendButton">Enviar</button>
  </CardContainer>
  {/* <DivForm>
      <PaymentDropdown options = {dropList}/>
  </DivForm> */}
  </>
) 
}

export default OrderInput