import React from 'react';
import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <header className={`${classes.header} ${props.classes}`}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
            {/* <div className={classes['main-image']}>
                <img ref='./meals.jpg' alt='A table of delicious meals.' />
            </div> */}
        </header>
    );
};

export default Header;