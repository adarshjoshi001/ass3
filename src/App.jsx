import React, { useState } from 'react';
import  Icon from './Components/Icon';
// import React tossify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import reactstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const tictacArray = new Array(9).fill("")
const App = () => {

    let [isCross,setIsCross] = useState(true);
    let [winMsg,setwinMsg] = useState("");

    const playAgain = () =>{
        setIsCross(true);
        setwinMsg("");
        tictacArray.fill("");
    }

    const findWinner = () => {
        if(tictacArray[0] == tictacArray[1] && tictacArray[0]==tictacArray[2] && tictacArray[0]!= ""){
            setwinMsg(tictacArray[0] + " has won");
        }
       else  if(tictacArray[3] == tictacArray[4] && tictacArray[3]==tictacArray[5] && tictacArray[3]!= ""){
            setwinMsg(tictacArray[3] + " has won");

        }
       else  if(tictacArray[6] == tictacArray[6] && tictacArray[6]==tictacArray[8] && tictacArray[6]!= ""){
            setwinMsg(tictacArray[6] + " has won");
       }
        else  if(tictacArray[0] == tictacArray[3] && tictacArray[0]==tictacArray[6] && tictacArray[0]!= ""){
            setwinMsg(tictacArray[0] + " has won");
       }
        else  if(tictacArray[1] == tictacArray[4] && tictacArray[1]==tictacArray[4] && tictacArray[1]!= ""){
            setwinMsg(tictacArray[1] + " has won");
       }
        else  if(tictacArray[2] == tictacArray[5] && tictacArray[2]==tictacArray[8] && tictacArray[2]!= ""){
            setwinMsg(tictacArray[2] + " has won");
       }
        else  if(tictacArray[0] == tictacArray[4] && tictacArray[0]==tictacArray[8] && tictacArray[0]!= ""){
            setwinMsg(tictacArray[0] + " has won");
       }
    }

   

    return (
        <>
        <Icon choice="circl"/>
        </>
    )
}

export default App;