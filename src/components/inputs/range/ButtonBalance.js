import React from "react";
import ButtonWrapper from "../ButtonWrapper";
import IconScales from "./scales.svg";

const ButtonBalance = ({clickHandler, id, ...rest}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='scales-button'
    {...rest}
>
    <img src={IconScales} alt="balanced scales icon"/>
</ButtonWrapper>

export default ButtonBalance
