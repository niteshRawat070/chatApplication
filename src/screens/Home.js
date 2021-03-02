import React from 'react'
import '../App.css'
import homeImage from '../image/home.jpg'
import {motion } from 'framer-motion'
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {useHistory} from 'react-router-dom'

function Home() {
  const history=useHistory();
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
  return (
    <div className='homePage'>
      <div className='homePageInner'>
        <div className='imageContainer'>
          <img src={homeImage}
           width='100%' height='100%'
           style={{borderRadius:'20px'}}
           />
          <motion.p
          initial={{
            x:'-100vh',
            y:-100
          }}
          animate={{
            x:0,
            y:-100
          }}
          transition={{
            type:'spring',
            duration:1.5,
            delay:0.25
          }}
          className='welcomeText'>Welcome to Anonymous Chat Web App
          </motion.p>
          <motion.button 
          onClick={()=>history.push('/welcome')}
          className='startButton'
          variants={buttonVariant}
          whileHover='hover'
          initial={{
            x:'100vh',
            y:100
          }}
          animate={{
            x:0,
            y:100,
            scale:1.02
          }}
          transition={{
            type:'spring',
            duration:1.5,
            delay:0.25
          }}
          >Let's Begin</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Home
