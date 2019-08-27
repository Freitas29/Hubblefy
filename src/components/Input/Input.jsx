import React from 'react'
import './Input.scss'

export default function Input(props){
    return(
        <div className='input-field'>
            <input type={props.type} id={props.label} placeholder={props.holder} onChange={props.onChange}/>
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export function Select(props){
    return(
        <div className='input-field'>
            <select type={props.type} id={props.label} placeholder={props.holder} onChange={props.onChange}>
                {props.children}
            </select>
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}