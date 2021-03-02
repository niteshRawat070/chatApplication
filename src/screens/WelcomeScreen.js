import React,{useState,useEffect} from 'react'
import '../App.css'
import TopBar from './TopBar'
import {useHistory } from "react-router-dom";
import img1 from '../image/chatScreen1.jpg'
import img2 from '../image/chatScreen2.jpg'
import img3 from '../image/chat.jpg'
import { userAction } from '../redux/action';
import {motion} from 'framer-motion'


function WelcomeScreen({userNameRedux,dispatch}) {
    // const img1=require('../image/chatScreen1.jpg')
    // const img2=require('../image/chatScreen2.jpg')
    const buttonVariant={
        hover:{
          // scale:[1.1,1,1.1,1,1.1], //keyframes
          scale:1.1,
              //x y z color
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
          transition:{
            // yoyo:10 //10 times or 5
            duration:0.3,
            yoyo:Infinity
          }      
        }
      }
      const imageVariant={
        animationOne:{
            x:[-80,80],
            y:[0,-30],
            transition:{
                x:{
                    yoyo:Infinity,
                    duration:1.4
                },
                y:{
                    yoyo:Infinity,
                    duration:0.7,
                    ease:"easeOut"
                }
            }
        }
      }
      

    const backgroundImages=[img1,img2]
  const history = useHistory();
    const [i,setI]=useState(0)
    const [name,setName]=useState('')
    const [image,setImage]=useState(backgroundImages[i])
    const registerScreen = () => {
        history.push("/chat");
        window.location.reload(false);
      };
    useEffect(() => {
        for (let j = 0; j <= backgroundImages.length; j++) {
            setTimeout(() =>setImage(backgroundImages[i+1]), 10000)
        }
    }, [])
    return (
        <>
        <TopBar />
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1,height:'100vh',width:'100%'}}>
            <div style={{position:'relative',display:'flex',flexDirection:'column',flex:1,width:'100%',height:'100%'}}>
                <div style={{display:'flex',flexDirection:'column',flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                <p style={{marginLeft:'3vw',fontSize:'25px',color:'green'}}>Welcome to <b>Let's Chat</b> Web App</p>
                <p style={{marginLeft:'3vw',fontSize:'15px',color:'gray'}}>You're just few steps away. Enter your name and chat with any anonymous person.<br />Don't use any bad words once you're inside a chat room. All you can do here is to <b>raise any question</b> or give <b>answer of questions.</b><br/>If you still have any doubt about our terms and conditions then you can check the <b>About</b> tab on top right of your screen </p>
                </div>
                <div style={{display:'flex',flex:1,
                flexDirection:'column',alignItems:'center',justifyContent:'center',
                background:"linear-gradient(to right,rgb(33, 34, 34), #1e1e1e)",borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
                    <div style={{display:'flex',marginBottom:'15vh',marginTop:'2vh'}}>
                        <motion.img 
                        variants={imageVariant}
                        animate='animationOne'
                        src={img3} height='80px'width='80px' style={{borderRadius:'60px'}} />
                    </div>
                {/* <InputName />     */}
                
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'100%'}}>
                        <input
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='input'
                        />
                        <motion.button
                        variants={buttonVariant}
                        whileHover='hover' 
                        
                        onClick={()=>{
                            if(name.length!==0){
                            dispatch(userAction(name)) &&
                            history.push('/chat')
                            }else{
                                alert("Name cannot be empty :(")
                            }
                        }}
                            style={{height:'6vh',width:'30vw',color:'white',background:'linear-gradient(to right,green,#41d152)',padding:'1vh 3vh',borderRadius:'10px',borderColor:'transparent',fontSize:'19px',letterSpacing:'1px'}}
                            >Enter</motion.button>
                        
                    </div>   
                
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1,height:'100vh'}}>
            <img style={{height:'100vh',width:'100%',flex:1,borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}} src={image} alt='imagessss' />
            </div>
        </div>
        </>
    )
}

export default WelcomeScreen
