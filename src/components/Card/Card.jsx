import React from  'react'
import './Card.scss'

export default function Card(props){
    return(
        <div className="card-member">
            <p className="card-name">{props.name}:</p>
            <label className="level-access">{props.access}</label>
            <label className="close">&times;</label>
        </div>
    )
}