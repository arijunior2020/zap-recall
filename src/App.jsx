import { useState } from 'react';
import styled from 'styled-components';
import { FlashcardList, Result, Title } from './components';
import flashcards from './data';

function App() {
  const [completed, setCompleted] = useState(0);

  const handleAnswer = () => {
    setCompleted(prev => prev + 1);
  };

  return (
    <Container>
      <Title />
      <FlashcardList flashcards={flashcards} onAnswer={handleAnswer} />
      <Footer>
        <Result completed={completed} total={flashcards.length} />
      </Footer>
    </Container>
  );
}

export default App;

/* Styled Components */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #FB6B6B;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Footer = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center; 
  align-items: center;
`;
