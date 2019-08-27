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
        case "REMOVE_MEMBER_CHANGED":
            return{
                ...state,
                 members: state.members.filter(item  => item.id !== action.payload)
            }
        case "MEMBER_CHANGED":
            return {
                ...state,
                ...state.members[action.payload.id-1] = action.payload
            }
        default:
            return state
    }
}