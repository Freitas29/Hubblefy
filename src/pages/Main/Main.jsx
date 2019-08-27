import React from 'react'
import './Main.scss'
import Button from '../../components/Button/Button'

export default function Main(){
    return(
        <div className="container-main">
            <div className="info">
                <h4>Membros da Org</h4>
                <p>Chegou a hora de adicionar os <br/>
                    primeiros membros da sua nova org:
                </p>

                <div className="actions">
                    <Button type="success" value="Adicionar Membro"/>
                    <Button type="alert" value="Ir para Org" />
                </div>
            </div>
        </div>
    )
}