import React from 'react'
import classes from './Header.module.css'
import MealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImg} alt='A table full of delicious food.'/>
      </div>
    </React.Fragment>
  )
}
