import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  border-width: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.colorChange === true ? "#ffff00" : "#99b3ff"};
`;

export const LogInContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  padding: 10px;
`;

export const LogInImg = styled.img`
  height: 300px;
`;

export const MainHeading = styled.h2`
  text-align: center;
`;

export const LabelFiled = styled.label`
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
`;

export const InputFiled = styled.input`
  outline: none;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 0px;
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;

  &:hover {
    background-color: coral;
  }
`;
