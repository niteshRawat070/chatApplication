import React from 'react'
import { Route, useHistory } from "react-router-dom";
import {motion} from 'framer-motion'
import {IoIosContact} from 'react-icons/io'


function TopBar(props) {
  const history = useHistory();
      const buttonVariant={
        hover:{
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
          transition:{
            duration:0.3,
            yoyo:Infinity
          }      
        }
      }
    return (
        <div style={{backgroundColor:'#1e1e1e',display:'flex',flex:1}}>
            <div style={{display:'flex',flex:1}}>
                <motion.p 
                initial={{
                    x:'-10vw'
                }}
                animate={{
                    x:0
                }}
                transition={{
                    type:'spring',
                    stiffness:46,
                    duration:0.5
                }}
                style={{color:'white',backgroundColor:'green',padding:'2vh 5vh',borderRadius:'5px',marginLeft:'3vw',margin:'1vh',fontSize:'20px',fontFamily:'cursive'}}>
                    Let's Chat
                </motion.p>
            </div>
            <motion.div
            initial={{
                x:'110vw'
            }}
            animate={{
                x:0
            }}
            transition={{
                type:'spring',
                stiffness:36,
                duration:0.5
            }}
            style={{display:'flex',flex:1,flexDirection:'row-reverse',paddingRight:'10px'}}>
            <motion.button
            variants={buttonVariant}
            whileHover='hover'
            style={{backgroundColor:'white',borderColor:'transparent',color:'#1e1e1e',letterSpacing:'1px',fontSize:'20px',borderRadius:'10px',margin:'10px 0'}}>About</motion.button>
            <motion.button 
            variants={buttonVariant}
            whileHover='hover'
            style={{backgroundColor:'transparent',borderColor:'transparent',color:'white',letterSpacing:'1px',fontSize:'20px'}} type='button'>Developer <IoIosContact /></motion.button>
            <motion.button
            onClick={()=>history.push('/help')}
            variants={buttonVariant}
            whileHover='hover'
            style={{backgroundColor:'transparent',borderColor:'transparent',color:'white',letterSpacing:'1px',fontSize:'20px'}}>Help</motion.button>
            </motion.div>
        </div>
    )
}

export default TopBar
