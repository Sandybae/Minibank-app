import React from 'react';
import PremierCurrent from '../components/MainPage/PremierCurrent';
import CurrentAccount from '../components/MainPage/CurrentAccount';
import AdvantageCurrent from '../components/MainPage/AdvantageCurrent';
import Share from '../components/MainPage/Share';
import ClassicCurrent from '../components/MainPage/ClassicCurrent';
import DiasporaCurrent from '../components/MainPage/DiasporaCurrent';
import StudentCurrent from '../components/MainPage/StudentCurrent';
import Footer from './footer';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <CurrentAccount />
        <ClassicCurrent />
        <StudentCurrent />
        <AdvantageCurrent />
        <PremierCurrent />
        <DiasporaCurrent />
        <Share />
      </div>
      <Footer />
    </div>
  );
}
