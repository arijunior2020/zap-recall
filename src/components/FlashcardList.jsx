import PropTypes from "prop-types";
import styled from "styled-components";
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards, onAnswer }) {
    if (!flashcards || flashcards.length === 0) {
        return <Message>Nenhuma pergunta encontrada</Message>;
    }

    return (
        <ListContainer>
            {flashcards.map((card, index) => (
                <Flashcard 
                    key={index} 
                    flashcard={card} 
                    index={index} 
                    onAnswer={onAnswer} 
                />
            ))}
        </ListContainer>
    );
}

/* PropTypes */
FlashcardList.propTypes = {
    flashcards: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

/* Styled Components */
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    overflow-y: auto;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px; 
    flex-grow: 1; 
`;

const Message = styled.p`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;
