import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 1060px;
    background: #E8E5E5;
`;
export const Boxes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const LeftBox = styled.div`
    width: 760px;
    height: 900px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
`;
export const board = styled.img`
    width: 600px;
    height: 900px;
`;
export const RightBox = styled.div`
    width: 1160px;
    height: 900px;
    background: blue;
    margin-top: 60px;
`;
export const FormationNTitle = styled.div`
    width: 1160px;
    height: 100px;
    background: red;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
export const FormationBox = styled.div`
    display: flex;
`;
export const Formation = styled.div`
    width: 100px;
    height: 50px;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 5px;
`;
export const FormationSelector = styled.select`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: normal;
    border: 1px solid #9999;
    border-radius: 3px;
    outline: 0px;
    margin: auto 0px;

    &:hover{
        border: 1px solid #999;
    }
`;
export const TitleBox = styled.div`
    display: flex;
`;