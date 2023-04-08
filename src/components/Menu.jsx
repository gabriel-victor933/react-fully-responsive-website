import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styled, {keyframes,css} from "styled-components"

export default function Menu(){

    const [isClicked, setIsClicked] = useState(false)
    const [animation, setAnimation] = useState(false)

    function handleClose(){

        setAnimation(!animation)

        setTimeout(()=>{
            setIsClicked(!isClicked)
        },300)
    }

    function handleOpen(){

        setAnimation(!animation)
        setIsClicked(!isClicked)
    }

    return (
        <div>

            {isClicked ? <AiOutlineClose style={{fontSize: "40px"}} onClick={handleClose}/>:<AiOutlineMenu style={{fontSize: "40px"}} onClick={handleOpen}/>}
            {isClicked && <Menumobile open={animation}>
                <div><h2>Home</h2></div>
                <div><h2>Services</h2></div>
                <div><h2>Products</h2></div>
                <button>sign up</button>
            </Menumobile>}
            
        </div>
    )
}

const Entrada = keyframes`
  
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
`;

const Saida = keyframes`
0% {
    transform: scaleX(1);
    transform-origin: 0 0;
 
  }
  100% {
    transform: scaleX(0);
    transform-origin: 0 0;
  }
`;

const Animein = css`
    animation: ${Entrada} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const Animeout = css`
    animation: ${Saida} 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

const  Menumobile = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 80px);
    left: 0px;
    top: 80px;
    background-color: black;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    z-index: 1;
    ${props => (!props.open ? Animeout : Animein)}

    div {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {

            font-size: 25px;
        }
     }

     div:hover{
        background-color: white;
        color: black;
     }
    
    

    button {
        margin-top: 20px;
        margin-bottom: 30px;
        width: 80%;
        height: 80px;
        border: solid 2px white;
        border-radius: 5px;
        background-color: black;
        color: white;   
        font-size: 25px;
    }
    button:hover {
        background-color: white;
        color: black;
    }
    button:active {
        background-color: black;
        border: solid 4px white;
        color: white;
    }
    
`;