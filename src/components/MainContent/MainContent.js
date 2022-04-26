import React from 'react';
import * as S from './Style';
import EplBest11 from '../../assets/EplBest11.png';
import EplWinner11 from '../../assets/EplWinner11.png'
import CreateButton from '../CreateButton/Button';
import SoccerSquare from '../../assets/Soccer.png';
import Sonny from '../../assets/Photo.png';
import ShareIcon from '../../assets/ShareIcon.png';
import Tottenham from '../../assets/Tottenham11.png';
import Chelsea from '../../assets/Chelsea11.png';

const MainContent = () => {
    return (
        <>
            <S.FirstPage>
                <S.TopBar />
                <S.Boxes>
                    <S.LeftBox>
                        <S.EplBestImg src={EplBest11} />
                        <S.EplWinner src={EplWinner11} />
                    </S.LeftBox>
                    <S.RightBox>
                        <S.TopSquareSetting>
                            <S.TopSquare>
                                <S.TopSquareTitle>
                                    Create your favorite team of EPL
                                </S.TopSquareTitle>
                                <S.TopSquareDetail>
                                    Choose your favorite players to form your team
                                </S.TopSquareDetail>
                            </S.TopSquare>
                        </S.TopSquareSetting>
                        <S.ColumnSquareSetting>
                            <S.LeftSquare>
                                <S.ColumnSquareTitle>
                                    Build
                                </S.ColumnSquareTitle>
                                <S.SquareDetail>
                                    your team’s with your favorite player
                                </S.SquareDetail>
                                <S.LeftSquareImg src={SoccerSquare}/>
                            </S.LeftSquare>
                            <S.MiddleSquare>
                                <S.ColumnSquareTitle>
                                    Photo
                                </S.ColumnSquareTitle>
                                <S.SquareDetail>
                                    of all EPL players
                                </S.SquareDetail>
                                <S.MiddleSquareImg src={Sonny} />
                            </S.MiddleSquare>
                            <S.RightSquare>
                                <S.ColumnSquareTitle>
                                    Free
                                </S.ColumnSquareTitle>
                                <S.SquareDetail>
                                    to use and share with your friends
                                </S.SquareDetail>
                                <S.RightSquareImg src={ShareIcon} />
                            </S.RightSquare>
                        </S.ColumnSquareSetting>
                        <S.BottomSquareSetting>
                            <S.BottomSquare>
                                <CreateButton />
                            </S.BottomSquare>
                        </S.BottomSquareSetting>
                    </S.RightBox>
                </S.Boxes>
            </S.FirstPage>
            <S.MiddleBar />
            <S.SecondPage>
            <S.TopBar />
                <S.Boxes>
                    <S.RightBox>
                        <S.LeftTopSquareSetting>
                            <S.LeftTopSquare>
                                <S.LeftTopSquareTitle>
                                    The only formation creater with photos of all epl players
                                </S.LeftTopSquareTitle>
                                <S.LeftTopSquareDetail>
                                    Download your squad and share with your friends
                                </S.LeftTopSquareDetail>
                            </S.LeftTopSquare>
                        </S.LeftTopSquareSetting>
                        <S.LeftMiddleSquareSetting>
                            <S.LeftMiddleSquare>
                                <S.LeftMiddleSquareDetail>
                                    Easily create your football team in our soccer tatics and formation tools.
                                </S.LeftMiddleSquareDetail>
                            </S.LeftMiddleSquare>
                        </S.LeftMiddleSquareSetting>
                        <S.LeftBottomSquareSetting>
                            <S.LeftBottomSquare>
                                <S.LeftBottomSquareButton>
                                    <CreateButton />
                                </S.LeftBottomSquareButton>
                            </S.LeftBottomSquare>
                        </S.LeftBottomSquareSetting>
                    </S.RightBox>
                    <S.LeftBox>
                        <S.Tottenham11 src={Tottenham} />
                        <S.Chelsea11 src={Chelsea} />
                    </S.LeftBox>
                </S.Boxes>
            </S.SecondPage>
        </>
    );
};

export default MainContent;