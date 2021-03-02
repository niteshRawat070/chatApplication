import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import {FiSend,FiLogOut} from 'react-icons/fi';
import {motion } from 'framer-motion'
import {useHistory} from 'react-router-dom'
import {deleteAction} from '../redux/action'
import '../App.css'
const Page = styled.div`
  display: flex;
  flex:1;
  height: 110vh;
  width: 100%;
  align-items: center;
  background: #ebf1f2;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  background:#dfe8e8;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 90%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.input`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: #dfe8e8;
  border: 1px solid lightgray;
  outline: none;
  color: gray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: gray;
  }
  marginBottom:20px;

`;

const Button = styled.button`
  background: linear-gradient(to right , #5bf587, #5bf572 );
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
`;

const Form = styled.form`
  width: 90%;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #edf2f0;
  color: #1e1e1e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius:10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: #aef5c1;
  color: #1e1e1e;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px; 
  text-align: center;
  border-radius:10%;
`;

const buttonVariant={
  hover:{
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
    transition:{
      // yoyo:10 //10 times or 5
      duration:0.3,
      yoyo:Infinity
    }      
  }
}


const ChatApp = ({userNameRedux,dispatch}) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef();
  const history=useHistory();

//useRef is a like a box which can hold a mutable value in its .current property
  useEffect(() => {
    socketRef.current = io.connect('/');//setting connection

    socketRef.current.on("new-user", id => {
      setYourID(id);
    }) //adding new user inside yourId using useRef
    

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    }) //handling message
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  } //keeping all the old messages + new message

  function sendMessage(e) {
    e.preventDefault(); //prevent page from refresh
    const messageObject = {
      body: message,
      id: yourID
    }; //an object which hold the id and the message send by that id
    setMessage(""); //right now its empty
    socketRef.current.emit("send-message", messageObject); //when this will trigger then send the whole messageObject
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
    <Page>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#1e1e1e',width:'100%'}}>
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
        style={{color:'white',background: "linear-gradient(to bottom , #5bf587, #5bf572 )",padding:'2vh 5vh',borderRadius:'5px',marginLeft:'3vw',margin:'1vh',fontSize:'20px',fontFamily:'cursive'}}>Welcome {userNameRedux}</motion.p>
        <motion.button
        onClick={()=>{
          dispatch(deleteAction())&&
          history.push('/welcome')
        }}
        variants={buttonVariant}
        whileHover='hover'
        initial={{
          x:'100vw'
      }}
      animate={{
          x:0
      }}
      transition={{
          type:'spring',
          stiffness:36,
          duration:0.5
      }}
        style={{backgroundColor:'white',borderColor:'transparent',color:'#1e1e1e',letterSpacing:'1px',fontSize:'20px',padding:'7px',borderRadius:'10px',margin:'10px 10px'}}>LogOut  <FiLogOut/></motion.button>
        </div>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  {message.body}
                </MyMessage>
              </MyRow>
            )
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Write message..." />
        <Button>Send Message <FiSend /></Button>
      </Form>
    </Page>
    </>
  );
};

export default ChatApp;