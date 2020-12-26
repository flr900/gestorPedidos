import React from 'react'
import Select from 'react-select'
import { hex } from 'chroma-js'

interface IDropDown {
  Options:Array<string> | any; 
  Width?:string
  className?: string
}

export default function DropDown(props:IDropDown){
return(
   <Select 
   options={props.Options} 
  /* styles= {
    {
      option: (dropList, state) => ({
        ...dropList,
        backgroundColor: state.isSelected ? "#DCDCDC" : state.isFocused ? hex("#DCDCDC").alpha(0.4).css(): 'white',
        border: 0,
        color: "#232020",
      }),
      control: (dropList, state) => ({
          ...dropList, backgroundColor: 'white' , 
         // width: state.selectProps.width,
          color: "#232020"
        }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
      
        return { ...provided, opacity, transition };
      },  menu: (provided, state) => ({
        ...provided,
        backgroundColor: "white",
        border: "0 solid black" ,
        color: state.selectProps.menuColor,
        padding: 2,
        margin: 0,
      }), 
    }
  }*/
/>
) 
}

