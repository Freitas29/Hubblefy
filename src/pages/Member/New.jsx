import React, { useState } from 'react'
import './New.scss'
import Input, { Select } from '../../components/Input/Input'
import Button from '../../components/Button/Button'

export default function New(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [acess, setAccess] = useState('')
    
    function handleCancel(e){
        e.preventDefault()
    }

    function handleForm(e){
        e.preventDefault()
    }

    return(
        <div className="container-new">
            <div className="info" >
                <h4>Membros da Org</h4>
                    <p>Chegou a hora de adicionar os <br/>
                        primeiros membros da sua nova org:
                    </p>
             </div>
            <form>
                <Input value={name} type="text" label="Nome" holder="ex. Erin Green"/>
                <Input value={email} type="email" label="E-mail" holder="ex. e.green@company.now"/>
                <Input value={department} type="text" label="Departamento" holder="ex. Tech"/>
                
                <Select value={acess} label="Nível de acesso" onChange={e => setAccess(e.target.value)}>
                    <option value="user" defaultValue>Usuário</option>
                    <option value="leitor">Leitor</option>
                    <option value="admin">Admin</option>
                </Select>

                <div className="actions">
                    <Button value="Salvar" type="default" onClick={e => handleForm(e)}/>
                    <Button value="Cancelar" type="none" onClick={e => handleCancel(e)}/>
                </div>
            </form>
        </div>
    )
}

