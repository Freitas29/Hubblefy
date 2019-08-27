import React, { useState } from 'react'
import './Edit.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeMember } from '../../redux/Members/MemberAction'
import Input, { Select } from '../../components/Input/Input'
import Button from '../../components/Button/Button'


function Edit(props){

    const [user] = useState(props.members[props.match.params.id-1]);

    const [name, setName] = useState(user ? user.name : "algo")
    const [email, setEmail] = useState(user ? user.email : "")
    const [department, setDepartment] = useState(user ? user.department : "")
    const [access, setAccess] = useState(user ? user.access : "")

    
    

    function handleCancel(e){
        e.preventDefault()
    }

    function handleForm(e){
        e.preventDefault()
        let id = verifyId()
        props.addMember({
            id,
            name,
            email,
            department,
            access
        })
    }

    function verifyId(){
        let lastMember = props.members.reverse()
        if(lastMember.length === 0){
            return 1
        }else{
            return lastMember[0].id + 1
        }
    }


    return(
        <div className="container-edit">
        { user ? 
            <form>
                <Input value={name} type="text" label="Nome" holder="ex. Erin Green" onChange={e => setName(e.target.value)}/>
                <Input value={email} type="email" label="E-mail" holder="ex. e.green@company.now" onChange={e => setEmail(e.target.value)}/>
                <Input value={department} type="text" label="Departamento" holder="ex. Tech" onChange={e => setDepartment(e.target.value)}/>
                
                <Select value={access} label="Nível de accesso" onChange={e => setAccess(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="leitor">Leitor</option>
                    <option value="admin">Admin</option>
                </Select>

                <div className="actions">
                    <Button value="Atualizar" type="default" onClick={e => handleForm(e)}/>
                    <Button value="Cancelar" type="none" onClick={e => handleCancel(e)}/>
                </div>
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

const mapDispatchToProps = dispatch => bindActionCreators({ removeMember },dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Edit)