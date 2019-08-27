export function addMember(member){
    return{
        type: "ADD_MEMBER_CHANGED",
        payload: member
    }
}


export function removeMember(id){
    return{
        type: "REMOVE_MEMBER_CHANGED",
        payload: id
    }
}


export function updateMember(member){
    return{
        type: "MEMBER_CHANGED",
        payload: member
    }
}