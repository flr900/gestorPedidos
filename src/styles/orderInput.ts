import styled from 'styled-components'
import Select from 'react-select'

const dropList = [
  { value: 'Ifood', label: 'Ifood' },
  { value: 'Cartão', label: 'Cartão' },
  { value: 'Dinheiro', label: 'Dinheiro' }
]


export const CardContainer = styled.div`
max-width: 555px;
max-height: 251px;

background: #4C3161;
border-radius: 10px;

display:flex;
flex-direction:column;
align-items:center;
justify-content: center;

input#nameInput {

  width: 474px;
  height: 44px;

  border: 0px;
  border-radius: 10px;

  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #232020;
  background: #FFFFFF;
}



div{
  width: 474px;

  margin-top: 9px;
  display: flex
  align-items: center;
  justify-content: space-between;

  input{
    width: 191px;
    height: 44px;
    border: 0px;
    border-radius: 10px;


    font-family: roboto, sans-serif;
    font-style: light;
    font-weight: 100;
    font-size: 25px;
    
    line-height: 35px;
    text-align:center;

  }
}

  button#sendButton{
    width: 426px;
    height: 44px;

    margin-top:38px;

    border:0;
    border-radius:10px;

    font-family: roboto, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 25px;
    line-height: 35px;
    text-align: center;

    color: #232020;

    transition: color 0.2s, background-color 0.2s;
  }

  button#sendButton:hover{
     color: white;
     background-color: #D0EFB1;

  }
`
export const PaymentDropdown = styled(Select)`
  width: 256px;
  height: 44px;
  color: "#232020";

  font-family: roboto, sans-serif;
  font-weight: 100;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  font-style: normal;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

`

export const DivForm = styled.div `display:flex;`