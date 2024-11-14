import React from 'react';
import './Cities.css';
import newyork from '../media/newyork.png';
import miami from '../media/miami.png';
import lasvegas from '../media/lasvegas.png';
import chicago from '../media/chicago.png';

function Cities() {
    return (
        <>
        <div className="cities">
            <div className="cities__container">
            <div className="cities__text">
                <h1>Cities</h1>
            </div>
            <div className="cities__cards">
                <div className="cities__card">
                    <img src={newyork} alt="New York"/>
                    <div className="cities__info">
                        <h2>New York</h2>
                    </div>
                </div>
                <div className="cities__card">
                    <img src={miami} alt="Miami"/>
                    <div className="cities__info">
                        <h2>Miami</h2>
                    </div>
                </div>
                <div className="cities__card">
                    <img src={lasvegas} alt="Las Vegas"/>
                    <div className="cities__info">
                        <h2>Las Vegas</h2>
                    </div>
                </div>
                <div className="cities__card">
                    <img src={chicago} alt="Chicago"/>
                    <div className="cities__info">
                        <h2>Chicago</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Cities;