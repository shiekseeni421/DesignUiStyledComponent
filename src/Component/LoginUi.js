import React from "react";
import { useState } from "react";
import {
  Wrapper,
  LogInContainer,
  LogInImg,
  MainHeading,
  LabelFiled,
  InputFiled,
  InputFieldContainer,
  SubmitButton,
} from "../StyledComponet/LoginUi.style";

function LoginUi() {
  let [colorChange, setColorChange] = useState(false);

  let ChangeColorByClick = () => {
    if (colorChange === false) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  return (
    <Wrapper colorChange={colorChange}>
      <LogInContainer backgroundColor=" #ffffff">
        <LogInImg
          src="https://t3.ftcdn.net/jpg/03/39/70/90/240_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
          alt="LogInImge"
        />

        <MainHeading>Please Login</MainHeading>

        <InputFieldContainer>
          <div>
            <LabelFiled htmlFor="UserName">Enter Email</LabelFiled>
            <br />
            <InputFiled type="Email" id="UserName" placeholder="Email" />
          </div>
          <div>
            <LabelFiled htmlFor="Password">Enter Password</LabelFiled>
            <br />
            <InputFiled type="password" id="Password" placeholder="Password" />
          </div>
          <SubmitButton
            SubmitButton
            backgroundColor=" #1a53ff"
            onClick={ChangeColorByClick}
          >
            Submit
          </SubmitButton>
        </InputFieldContainer>
      </LogInContainer>
    </Wrapper>
  );
}

export default LoginUi;
