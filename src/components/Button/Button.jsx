import React from 'react'
import './Button.scss'

export default function Button(props){
    return(
        <>
            <button className={props.type} onClick={props.onClick}>{props.value}</button>
        </>
    )
}