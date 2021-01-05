import React from "react";
import ButtonWrapper from "../ButtonWrapper";
import IconLock from "./lock.svg";

const ButtonLock = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='range-lock-button'
>
    <img src={IconLock} alt="locked padlock icon"/>
</ButtonWrapper>

export default ButtonLock
