import styled from 'styled-components';

const FormTitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
`;

const FormTitle = styled.h1`
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #202002;
    margin-bottom: 7px;
`;

const FormSubTitle = styled.span`
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.128571px;
    color: #202002;
    opacity: 0.5;
`;

const Input = styled.input`
    font-size: 16px;
    line-height: 28px;
    padding: 10px 18px;
    width: 100%;
    min-height: 44px;
    margin-bottom: 15px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    
    &:focus {
        border: 1px solid #4CA5FF;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.04204);
    }
`;

const Button = styled.button`
    width: 100%;
    min-height: 60px;
    border: none;
    border-radius: 4px;
    outline: none;
    margin-top: 10px;
    text-transform: uppercase;
    background-color: #4CA5FF;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.4s;

    &:active {
        background-color: #096DD9;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04204);
    }
`;

const StyledLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
`;

const StyledLink = styled.a`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1px;
    color: #ADADAD;
    text-decoration: unset;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        color: #9D9D9D;
    }
`;

export { FormTitleContainer, FormTitle, FormSubTitle, Input, Button, StyledLinkWrapper, StyledLink };