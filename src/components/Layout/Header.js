import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return <>
        <header className={classes.header}>
            <h1>React Meal</h1>
            <HeaderCartButton />
        </header>
        {/* this CSS class has a - so we can't use . notation */}
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="delicious foods" />
        </div>
    </>
};

export default Header;