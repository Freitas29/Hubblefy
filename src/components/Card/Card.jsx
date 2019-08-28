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
            <div className="card-member">
                    <Link to={`member/edit/${props.id}`}>
                        <p className="card-name">{props.name}:</p>
                    </Link>
                    
                    <Link to={`member/edit/${props.id}`}>
                        <label className="level-access">{props.access}</label>
                    </Link>
                <button onClick={e => remove(props.id)}><label className="close">&times;</label></button>
            </div>
    )
}

const mapStateToProps = state => ({
    members: state.member.members,
})

const mapDispatchToProps = dispatch => bindActionCreators({ removeMember },dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Card)