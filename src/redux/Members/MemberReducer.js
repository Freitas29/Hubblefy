const INIT_STATE = {
    members: [],
}


export default function(state = INIT_STATE, action){
    switch(action.type){
        case 'ADD_MEMBER_CHANGED':
            return{
                ...state,
                ...state.members.push(action.payload)
            }
        default:
            return state
    }
}