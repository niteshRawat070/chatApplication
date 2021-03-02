import React, { useState } from 'react'
import { Formik } from 'formik'
import { Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { userAction } from '../redux/action'

function InputName(props) {
  const history = useHistory();
  const userName=useSelector(state=>state.userName)
  const dispatch=useDispatch();
  const [detail,setDetail]=useState("")
    return (
        <div>
          <input type='text' value={detail} onChange={(e)=>setDetail(e.target.value)} />
          <button onClick={()=>{dispatch(userAction(detail))}}>Enter Chat Room</button>
            <button onClick={()=>{
            history.push("/chat")}}>Enter Room</button>
            <h1 style={{color:'white'}}>{userName}</h1>
        </div>
        // <Formik initialValues={{name:''}} onSubmit={(props) => {
        //     // console.log(values);
        //     // if (props.name.length!==0) {
        //     //   history.push("/chat");
        //     //   window.location.reload(false);
        //     // } else {
        //     //   alert("Name cannot be blank :(");
        //     // }
        //     if (props.name.length!==0) {
        //       dispatch(userAction(props.name))
        //       userName.push(props.name)
        //       alert(userName)
        //       history.push("/chat");
        //     } else {
        //       alert("Nahi ho raha mujhse kuch bhi")
        //     }
        //   }} >
        //                 {(props)=>(
        //                     <>
        //                     <input 
        //                         placeholder='Enter your name...'
        //                         value={props.name}
        //                         onChange={props.handleChange('name')}
        //                         className='input'
        //                         />
        //                         <button type='submit' onClick={props.handleSubmit} 
        //                         style={{height:'6vh',width:'90%',color:'white',backgroundColor:'green',padding:'1vh 3vh',borderRadius:'10px',borderColor:'transparent',fontSize:'19px',letterSpacing:'1px'}}>Enter Chat Room</button>
        //                     </>
        //                 )}
        //             </Formik>
    )
}

export default InputName
