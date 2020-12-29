import styled from "styled-components"


export const DivContainer = styled.section `
  
  width: 50%;
  max-width:  1183px;
  height:90vh;
  max-height: 962px;

  border:none;
  border-radius: 10px;

  background-color: #FFFF;

  display:flex;
  flex-direction:column;
  align-self: center;

  overflow: auto;

  .wrapper{
    margin-top: 30px;
    margin-left: 25px;
    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap: 9px;
    max-width: 1133px;
    width: 95%;
  }
`

export const ListItem = styled.div` 
  max-height: 44px;
  height:90%;

  background-color: ${props => props.theme === "Andamento" ? "#D0EFB1" : "#C4C4C4"};

  border:none;
  border-radius:10px;
  outline:none;

  align-items: center;

  display: flex;
  justify-content:center;

  *{
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3.3rem;

    color: #232020;
  }

  div.itemIdentifier{
    
    margin-right: 10px;
    width:55%;

    display:flex;

    align-items: center;
    justify-content:left;


    h3:first-child{
      margin-right: 22px;
    }

    strong{
      font-weight:400;
    }
  }

  div.itemDetails{
    max-width: 353px;
    width:41%;

    display:flex;

    align-items: center;
    justify-content:space-between;
  } 
`