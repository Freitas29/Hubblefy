import React from  'react'
import './Card.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeMember } from '../../redux/Members/MemberAction.js'

function Card(props){

    function remove(id){
        props.removeMember(id)
    }

    return(
        <div className="card-member">
            <p className="card-name">{props.name}:</p>
            <label className="level-access">{props.access}</label>
            <button onClick={e => remove(props.id)}><label className="close">&times;</label></button>
        </div>
    )
}

const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({ removeMember },dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Card)