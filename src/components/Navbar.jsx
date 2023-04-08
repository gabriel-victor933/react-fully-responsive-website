import styled from "styled-components"
import { DiReact } from "react-icons/di";
import Topics from "./Topics";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";


export default function Navbar(){

    

    const isMobile = useMediaQuery({query: "(max-width: 800px)"})


    return (
        <Header>
            <div>
                <DiReact style={{fontSize: "40px"}}/>
                <h1>React</h1>
            </div>
            <div>
                {!isMobile && <Topics />}
                {isMobile && <Menu />}
            </div>
        </Header>
    )
}

const Header = styled.div`

    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 60px;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    

    div {
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 40px;
    }
`;