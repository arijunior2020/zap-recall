import styled from "styled-components"
import PropTypes from "prop-types";

export default function Button({ color, children, onClick }) {
    return (
        <StyledButton 
        bgColor={color} 
        onClick={onClick}>
            {children}
        </StyledButton>
    )
}

/* Styled Components */
const StyledButton = styled.button`
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: ${(props) => props.bgColor};
    color: white;
    margin: 5px;
    width: 60px;
`;

/* PropTypes - Validação das Props */
Button.propTypes = {
    color: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func.isRequired, 
    };