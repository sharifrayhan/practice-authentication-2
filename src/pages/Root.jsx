import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/CArds';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;