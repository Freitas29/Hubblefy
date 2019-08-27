import React from 'react'
import './Main.scss'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../../components/Card/Card'
import { removeMember } from '../../redux/Members/MemberAction.js'


function Main(props){
    return(
        <div className="container-main">
            <div className="info">
                <h4>Membros da Org</h4>
                <p>Chegou a hora de adicionar os <br/>
                    primeiros membros da sua nova org:
                </p>

                <div className="members-list">
                    {props.members.length >= 1 && props.members.map(member => (
                        <Card
                        key={member.name}
                        name={member.name}
                        access={member.access}
                        id={member.id}
                        />
                    ))}
                </div>

                <div className="actions">
                    <Link to="member/new">
                        <Button type="success" value="Adicionar Membro"/>
                    </Link>
                    {props.members.length === 0 ? 
                    <Button type="alert" value="Ir para Org" />
                    :
                    <Button type="alert" value="Enviar Convites" />
                    
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({ removeMember },dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Main)