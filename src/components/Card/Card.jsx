import React from  'react'
import './Card.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeMember } from '../../redux/Members/MemberAction.js'
import { Link } from 'react-router-dom'

function Card(props){

    function remove(id){
        props.removeMember(id)
    }

    return(
        <Link to={`member/edit/${props.id}`}>
            <div className="card-member">
                <p className="card-name">{props.name}:</p>
                <label className="level-access">{props.access}</label>
                <button onClick={e => remove(props.id)}><label className="close">&times;</label></button>
            </div>
        </Link>
    )
}

const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({ removeMember },dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Card)