import React from "react";
import CreateButton from "../CreateButton/Button";
import * as S from "./Style";

const Header = () => {
    return (
        <S.Positioner>
            <S.Title>
                Positioner
            </S.Title>
            <CreateButton />
        </S.Positioner>
    );
};

export default Header;
