import style from './Header.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import { Link , NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="white origami"/></li>
                <Link to="/all-posts"><NavigationItem>All Posts</NavigationItem></Link>
                <Link to="/collection"><NavigationItem>Colection</NavigationItem></Link>
                <Link to="/store"><NavigationItem>Store</NavigationItem></Link>
                <Link to="/places"><NavigationItem>Places</NavigationItem></Link>
                <Link to="/members"><NavigationItem>Members</NavigationItem></Link>
                <Link to="/leaderboard"><NavigationItem>Leaderboard</NavigationItem></Link>
                <Link to="/news"><NavigationItem>News</NavigationItem></Link>
                <Link to="/fun"><NavigationItem>Fun</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About Us</NavigationItem></Link>
                <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
                <Link to="/other"><NavigationItem>Other</NavigationItem></Link>
            </ul>
        </nav>
    );
}

export default Header;