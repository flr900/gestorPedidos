import styled from 'styled-components'
import Select from 'react-select'


export const CardContainer = styled.section`
max-width: 555px;
width:30%;
height: 40%;
max-height: 251px;

margin-right: 29px;

background: #4C3161;
border-radius: 10px;

display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
position:relative;

input#nameInput {

  width: 85%;
  max-width:474px;
  height: 4vh;
  max-height: 44px;


  margin-top: 31px;

  
  border: 0px;
  border-radius: 10px;
  outline: none;
  
  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 3.5rem;
  text-align: center;
  color: #232020;
  background: #FFFFFF;
}



div{
  width: 85%;
  max-width:474px;
  
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input{
    border: 0px;
    border-radius: 10px;
    outline: none;

    height: 4vh;
    max-height: 44px;

    font-family: roboto, sans-serif;
    font-style: light;
    font-weight: 300;
    font-size: 2.5rem;
    
    line-height: 3.5rem;
    text-align:center;

  }

  input#paymentInput{
    width:100%;
    max-width: 256px;

    margin-right: 1.510vw;
  }

  input#totalInput{
    width: 100%;
    max-width: 191px;
  }

  input#totalInput::-webkit-outer-spin-button,
  input#totalInput::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input#totalInput[type=number] {
    -moz-appearance: textfield;
  }
}

  button#sendButton{
    width: 85%;
    max-width: 426px;
    height: 4vh;
    max-height: 44px;

    margin: 30px auto;

    border:0;
    border-radius:10px;
    outline: none;

    font-family: roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3.5rem;
    text-align: center;

    color: #232020;

    transition: color 0.2s, background-color 0.2s;
  }

  button#sendButton:hover{
     color: white;
     background-color: #D0EFB1;

  }
  
  img#logo{
    position:absolute;
    top: 120%;
    max-width: 300px;
    width:100%;
  }
  
`
export const PaymentDropdown = styled(Select)`
  width: 256px;
  height: 44px;
  color: "#232020";

  font-family: roboto, sans-serif;
  font-weight: 300;
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