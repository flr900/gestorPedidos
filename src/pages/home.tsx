import React from 'react'
import OrderInput from '../components/orderInput'
import OrderList from '../components/orderList'


import {DivContainer} from '../styles/home.styles'

function Home () {
  return (
    <DivContainer>
      <div id="container">
      <OrderInput/>
      <OrderList/>
      </div>
    </DivContainer>
  )
}
export default Home
