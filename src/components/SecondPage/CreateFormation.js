import React from 'react';
import * as S from './Style';
import tatical_board from '../../assets/tatical_board.png';

const CreateFormation = () => {
    return (
        <S.Background>
            <S.Boxes>
                <S.LeftBox>
                    <S.board src={tatical_board} />
                </S.LeftBox>
                <S.RightBox>
                    <S.FormationNTitle>
                        <S.FormationBox>
                            <S.Formation>
                                Formation:
                            </S.Formation>
                            <S.FormationSelector>
                            <option value="3412">3-4-1-2</option>
                            <option value="3421">3-4-2-1</option>
                            <option value="343">3-4-3</option>
                            <option value="352">3-5-2</option>
                            <option value="41212a">4-1-2-1-2 (a)</option>
                            <option value="41212b">4-1-2-1-2 (b)</option>
                            <option value="4141">4-1-4-1</option>
                            <option value="4222">4-2-2-2</option>
                            <option value="4231a">4-2-3-1 (a)</option>
                            <option value="4231b">4-2-3-1 (b)</option>
                            <option value="4312">4-3-1-2</option>
                            <option value="4321">4-3-2-1</option>
                            <option value="433a" selected>4-3-3 (a)</option>
                            <option value="433b">4-3-3 (b)</option>
                            <option value="433c">4-3-3 (c)</option>
                            <option value="433d">4-3-3 (d)</option>
                            <option value="433e">4-3-3 (e)</option>
                            <option value="4411">4-4-1-1</option>
                            <option value="442a">4-4-2 (a)</option>
                            <option value="442b">4-4-2 (b)</option>
                            <option value="451a">4-5-1 (a)</option>
                            <option value="451b">4-5-1 (b)</option>
                            <option value="5212">5-2-1-2</option>
                            <option value="5221">5-2-2-1</option>
                            <option value="532">5-3-2</option>
                            </S.FormationSelector>
                        </S.FormationBox>
                        <S.TitleBox>
                            
                        </S.TitleBox>
                    </S.FormationNTitle>
                </S.RightBox>
            </S.Boxes>
        </S.Background>
    );
};

export default CreateFormation;