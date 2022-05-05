import React from 'react';
import * as S from './Style';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainContent from '../components/FirstPage/MainContent';

const Firstpage = () => {

    return (
        <S.First>
            <Header />
            <MainContent />
            <Footer />
        </S.First>
    );
};

export default Firstpage;