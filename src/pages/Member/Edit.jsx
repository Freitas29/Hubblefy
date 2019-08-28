import React, { useState } from 'react'
import './Edit.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMember } from '../../redux/Members/MemberAction'
import Input, { Select } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit(props){

    const [user] = useState(props.members[props.match.params.id-1]);

    const [name, setName] = useState(user ? user.name : "algo")
    const [email, setEmail] = useState(user ? user.email : "")
    const [department, setDepartment] = useState(user ? user.department : "")
    const [access, setAccess] = useState(user ? user.access : "")

    const notify = (message) => toast.warn(`Por favor prencha o campo ${message}`);
    

    function handleCancel(e){
        e.preventDefault()
        setName(user.name)
        setEmail(user.email)
        setDepartment(user.department)
        setAccess(user.access)
    }

    function handleForm(e){
        e.preventDefault()
        let errors = verifyForm()
        
        if(errors.length === 0){
            saveData(name,email,department,access)
            props.history.push("/")
        }else{
            errors.map(error => (
                notify(error)
            ))
        }
    }

    function saveData(name,email,department,access){
        props.updateMember({
            id: user.id,
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

    return(
        <div className="container-edit">
        { user ? 
            <form>
                <Input value={name} type="text" label="Nome" holder="ex. Erin Green" onChange={e => setName(e.target.value)}/>
                <Input value={email} type="email" label="E-mail" holder="ex. e.green@company.now" onChange={e => setEmail(e.target.value)}/>
                <Input value={department} type="text" label="Departamento" holder="ex. Tech" onChange={e => setDepartment(e.target.value)}/>
                
                <Select value={access} label="Nível de accesso" onChange={e => setAccess(e.target.value)}>
                    <option value="Usuário">Usuário</option>
                    <option value="Leitor">Leitor</option>
                    <option value="Admin">Admin</option>
                </Select>

                <div className="actions">
                    <Button value="Atualizar" type="default" onClick={e => handleForm(e)}/>
                    <Button value="Cancelar" type="none" onClick={e => handleCancel(e)}/>
                </div>
                <ToastContainer />
            </form>
        :
            <h4>Membro não encontrado</h4>
        }
        </div>
    )
}


const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateMember },dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Edit)