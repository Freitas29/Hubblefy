import React, { useState } from 'react'
import './New.scss'
import Input, { Select } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMember } from '../../redux/Members/MemberAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function New(props){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [access, setAccess] = useState('Usuario')
    
    function handleCancel(e){
        e.preventDefault()
        props.history.push("/")
    }

    function handleForm(e){
        e.preventDefault()
        let id = verifyId()
        
        let errors = verifyForm()
        
        if(errors.length === 0){
            saveData(id,name,email,department,access)
            props.history.push("/")
        }else{
            errors.map(error => (
                notify(error)
            ))
        }
    }

    function saveData(id,name,email,department,access){
        props.addMember({
            id,
            name,
            email,
            department,
            access
        })
    }

    function verifyForm(){
        let errors = []
        if(name === "")
            errors.push("nome")
        if(email === "")
            errors.push("e-mail")
        if(department === "")
            errors.push("departamento")

        return errors
    }

    const notify = (message) => toast.warn(`Por favor prencha o campo ${message}`);

    function verifyId(){
        let lastMember = props.members.reverse()
        if(lastMember.length === 0){
            return 1
        }else{
            return lastMember[0].id + 1
        }
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
                <Input value={name} type="text" label="Nome" holder="ex. Erin Green" onChange={e => setName(e.target.value)}/>
                <Input value={email} type="email" label="E-mail" holder="ex. e.green@company.now" onChange={e => setEmail(e.target.value)}/>
                <Input value={department} type="text" label="Departamento" holder="ex. Tech" onChange={e => setDepartment(e.target.value)}/>
                
                <Select value={access} label="Nível de accesso" onChange={e => setAccess(e.target.value)}>
                    <option value="user" defaultValue>Usuário</option>
                    <option value="leitor">Leitor</option>
                    <option value="admin">Admin</option>
                </Select>

                <div className="actions">
                    <Button value="Salvar" type="default" onClick={e => handleForm(e)}/>
                    <Button value="Cancelar" type="none" onClick={e => handleCancel(e)}/>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({addMember},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(New)
