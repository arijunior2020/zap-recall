import PropTypes from "prop-types";
import styled from "styled-components";

export default function Result({ completed, total }) {
    return (
        <Footer>
            {completed}/{total} CONCLUÍDOS
        </Footer>
    );
}

/* PropTypes */
Result.propTypes = {
    completed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

/* Styled Components */
const Footer = styled.footer`
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    padding: 15px;
    text-align: center;
    border-top: 2px solid #DBDBDB;
`;
