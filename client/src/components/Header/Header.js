import style from './Header.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const Header = () => {

    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="white origami"/></li>
                <NavigationItem>All Posts</NavigationItem>
                <NavigationItem>Colection</NavigationItem>
                <NavigationItem>Store</NavigationItem>
                <NavigationItem>Places</NavigationItem>
                <NavigationItem>Members</NavigationItem>
                <NavigationItem>Leaderboard</NavigationItem>
                <NavigationItem>News</NavigationItem>
                <NavigationItem>Fun</NavigationItem>
                <NavigationItem>About Us</NavigationItem>
                <NavigationItem>History</NavigationItem>
                <NavigationItem>Other</NavigationItem>
            </ul>
        </nav>
    );
}

export default Header;