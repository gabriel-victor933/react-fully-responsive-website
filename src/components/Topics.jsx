import styled from "styled-components"

export default function Topics(){
    return (
        <List>
            <div><h2>Home</h2></div>
            <div><h2>Services</h2></div>
            <div><h2>Products</h2></div>
            <button>SIGN UP!</button>
        </List>
    )
}

const List = styled.div`

    div {
        height: 80px;
        box-sizing: border-box;
        
    }

    div:hover {
        border-bottom: solid 5px white;
    }
    
    h2 {
        font-size: 22px;
        margin: 0px 20px;
        
    }

    button {
        width: 150px;
        height: 40px;
        font-size: 18px;
        background-color: black;
        border: solid 1px white;
        color: white;
        margin: 0px 20px;
    }

    button:hover {
        background-color: white;
        color: black;
    }
    
    button:active {
        background-color: black;
        color: white;
        border: solid 4px white;
    }
`