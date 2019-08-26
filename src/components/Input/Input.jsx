import React from 'react'
import './Input.scss'

export default function Input(props){
    return(
        <div className='input-field'>
            <input type={props.type} id={props.value}/>
            <label for={props.value}>{props.value}</label>
        </div>
    )
}