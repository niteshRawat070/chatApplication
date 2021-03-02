import { DELETE_USERNAME, USER_NAME } from "./action";

const initialState={
    userNameRedux:'Anonymous'
}

const userReducer =(state=initialState,action)=> {
    switch (action.type) {
        case USER_NAME:
            return{
                ...state,
                userNameRedux:state.userNameRedux=action.payload
            }
        case DELETE_USERNAME:
            return{
                ...state,
                userNameRedux:"Anonymous"
            }
            default:
                return state;
    }
}
export default userReducer;