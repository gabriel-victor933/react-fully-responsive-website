import styled from "styled-components"
import {AiOutlinePlayCircle} from "react-icons/ai"


export default function Block(){

    return (
        <Capa>
            <div className="imagem">
            </div>

            <h1>ADVENTURE AWAITS</h1>
            <h3>What are you  waiting for?</h3>
            <div>
                <button>GET STARTED</button>
                <button>WATCH TRAILER <AiOutlinePlayCircle style={{fontSize: "25px", margin: "5px"}}/></button>
            </div>

    
        </Capa>
    )
}

const Capa = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .imagem {
    background-image: url("https://img.freepik.com/fotos-gratis/as-belas-estrelas-brilhando-no-ceu-noturno_181624-622.jpg?w=826&t=st=1680993030~exp=1680993630~hmac=9ba53a15f96fda6f2ac564c426384dc90b6d937dfac39c823812c95f35149f5a");
    background-repeat: round;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    }

    h1 {
        color: white;
        font-size: 80px;
        font-weight: 700;
        margin: 25px;
        text-align: center;
    }

    h3 {
        color: white;
        font-size: 40px;
        font-weight: 400;
        margin: 25px;
        text-align: center;

    }

    div {
        display: flex;
    }

    button {
        width: 230px;
        height: 50px;
        border: solid 2px white;
        margin: 25px 15px;

        font-size: 18px;
        font-weight: 700;

        &:first-child {
            background-color:   transparent;
            color: white;

        }

        &:last-child {
            background-color:   white;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }

    @media (max-width: 800px){
        div {
            display: block;
        }
    }

}
`  