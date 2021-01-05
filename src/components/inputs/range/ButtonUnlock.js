import React from "react";
import ButtonWrapper from "../ButtonWrapper";
import IconUnlock from "./unlock.svg";

const ButtonUnlock = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='range-lock-button'
>
    <img src={IconUnlock} alt="unlocked padlock icon"/>
</ButtonWrapper>

export default ButtonUnlock
