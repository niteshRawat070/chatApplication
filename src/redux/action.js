export const USER_NAME="USER_NAME";
export const DELETE_USERNAME='DELETE_USERNAME'

export function userAction(name) {
    return{
        type:USER_NAME,
        payload:name
    }
}
export function deleteAction() {
    return{
        type:DELETE_USERNAME
    }
}