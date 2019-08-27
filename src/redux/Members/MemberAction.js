export function addMember(member){
    return{
        type: "ADD_MEMBER_CHANGED",
        payload: member
    }
}