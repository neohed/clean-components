import React from "react";
import ButtonWrapper from "../ButtonWrapper";
import IconScales from "./scales.svg";

const ButtonBalance = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='scales-button'
>
    <img src={IconScales} alt="balanced scales icon"/>
</ButtonWrapper>

export default ButtonBalance
