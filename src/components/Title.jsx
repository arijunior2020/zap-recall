import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Title() {
    return (
        <Header>
            <HeaderImage src={logo} alt="ZapRecall Logo" />
            <TitleText>ZapRecall</TitleText>
        </Header>
    );
}

/* Styled Components */
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

const HeaderImage = styled.img`
    width: 52px;
    height: 60px;
    margin-right: 10px;
`;

const TitleText = styled.h1`
    font-family: "Righteous", sans-serif;
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 44.7px;
    letter-spacing: -1.2%;
    text-align: center;
`;
