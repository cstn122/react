import React from 'react';
import classes from './Header.module.css';
import mealsImage from './meals.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    const showCartHandler = (show) => {
        if (show) {
            props.onShowCartModal(show);
            console.log('show cart modal!');
        }
    };

    return (
        <>
            <header className={`${classes.header} ${props.classes}`}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={showCartHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table of delicious meals.' />
            </div>
        </>
    );
};

export default Header;