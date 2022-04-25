import React from 'react';
import * as S from './Style';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';

const MainPage = () => {

    return (
        <S.Page>
            <Header />
            <MainContent />
            <Footer />
        </S.Page>
    );
};

export default MainPage;