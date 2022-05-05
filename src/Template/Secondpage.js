import React from 'react';
import * as S from './Style';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreateFormation from '../components/SecondPage/CreateFormation'

const Secondpage = () => {
    return (
        <S.Second>
            <Header />
            <CreateFormation />
            <Footer />
        </S.Second>
    );
};

export default Secondpage;