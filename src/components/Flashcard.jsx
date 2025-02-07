import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Importando imagens dos ícones da pasta assets
import playIcon from "../assets/seta_play.png";
import virarIcon from "../assets/seta_virar.png";
import certoIcon from "../assets/icone_certo.png";
import erroIcon from "../assets/icone_erro.png";
import quaseIcon from "../assets/icone_quase.png";

export default function Flashcard({ flashcard, index, onAnswer }) {
    const [status, setStatus] = useState(null);
    const [step, setStep] = useState(0); // 0 = Título, 1 = Pergunta, 2 = Resposta, 3 = Finalizado

    const handleResponse = (type) => {
        if (step === 2) {
            setStatus(type); // Marca a resposta escolhida
            setStep(3); // Muda para o estado final
            onAnswer(); // Atualiza o contador
        }
    };

    return (
        <Card $status={status} $step={step}>
            {step === 0 && (
                <CardFront onClick={() => setStep(1)} $expanded={false}>
                    <Question $step={step}>Pergunta {index + 1}</Question>
                    <img src={playIcon} alt="Play" width="20px" />
                </CardFront>
            )}
            {step === 1 && (
                <CardFront $expanded={true}>
                    <Question $step={step}>{flashcard.question}</Question>
                    <IconWrapper onClick={() => setStep(2)}>
                        <img src={virarIcon} alt="Virar" width="20px" />
                    </IconWrapper>
                </CardFront>
            )}
            {step === 2 && ( // Estado Resposta
                <>
                    <Answer>{flashcard.answer}</Answer>
                    <ButtonGroup>
                        <StyledButton color="#FF3030" onClick={() => handleResponse("wrong")}>
                            Não Lembrei
                        </StyledButton>
                        <StyledButton color="#FF922E" onClick={() => handleResponse("almost")}>
                            Quase Não Lembrei
                        </StyledButton>
                        <StyledButton color="#2FBE34" onClick={() => handleResponse("correct")}>
                            Zap!
                        </StyledButton>
                    </ButtonGroup>
                </>
            )}
            {step === 3 && (
                <CardFinal $status={status}>
                    <AnsweredText $status={status}>
                        Pergunta {index + 1}
                    </AnsweredText>
                    <IconWrapperFinal>
                        {status === "wrong" && <img src={erroIcon} alt="Errado" width="23px" />}
                        {status === "almost" && <img src={quaseIcon} alt="Quase" width="23px" />}
                        {status === "correct" && <img src={certoIcon} alt="Certo" width="23px" />}
                    </IconWrapperFinal>
                </CardFinal>
            )}
        </Card>
    );
}

/* PropTypes */
Flashcard.propTypes = {
    flashcard: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
};

/* Styled Components */
const Card = styled.div`
    background: ${(props) =>
        props.$step === 0 ? "#FFFFFF" : 
        props.$step === 1 || props.$step === 2 ? "#FFFFD4" :
        props.$step === 3 ? "#FFFFFF" : "#FFFFFF"};

    border: 1px solid #DBDBDB;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    height: ${(props) =>
        props.$step === 0 ? "65px" :
        props.$step === 1 ? "131px" :
        props.$step === 2 ? "131px" :
        props.$step === 3 ? "65px" : "auto"};
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: height 0.3s ease-in-out, background 0.3s ease-in-out;
`;

const CardFront = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    background-color: ${(props) => (props.$expanded ? "#FFFFD4" : "#FFF")}; 
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;
`;

const CardFinal = styled(Card)`
    background: #FFFFFF; 
    display: flex;
    justify-content: space-between; 
    align-items: center;
    text-align: left;
    height: 65px;
    padding: 10px 15px; 
    border: none;
    flex-direction: row; 
`;

const AnsweredText = styled.p`
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align: left; 
    width: 100%;
    padding: 5px 15px; 
    text-decoration: ${(props) => (props.$status ? "line-through" : "none")};
    ${(props) =>
        props.$status === "wrong" ? "color: red;" :
        props.$status === "almost" ? "color: orange;" :
        props.$status === "correct" ? "color: green;" : ""};
`;

const Question = styled.p`
    font-family: "Recursive", sans-serif;
    font-weight: ${(props) => (props.$step === 0 ? "700" : "400")};
    font-size: ${(props) => (props.$step === 0 ? "16px" : "18px")};
    text-align: left;
    color: #333333;
`;

const Answer = styled.p`
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    width: 100%;
    padding: 10px;
    color: #333333;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-weight: 400; 
    font-size: 12px;  
    background-color: ${(props) => props.color};
    color: white;
    cursor: pointer;
    width: 85px;
    height: 37px;
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconWrapperFinal = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    width: auto; 
`;
