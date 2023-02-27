import React from 'react';
import FifthPage from '../components/MainPage/FifthPage';
import FirstPage from '../components/MainPage/FirstPage';
import FourthPage from '../components/MainPage/FourthPage';
import LastPage from '../components/MainPage/LastPage';
import SecondPage from '../components/MainPage/SecondPage';
import SixthPage from '../components/MainPage/SixthPage';
import ThirdPage from '../components/MainPage/Thirdpage';
import Footer from './footer';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <LastPage />
      </div>
      <Footer />
    </div>
  );
}
