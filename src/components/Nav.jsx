import Login from './Login';
import '../css/Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <hr></hr>
                <li><Login></Login></li>
            </ul>
        </nav>
    )
}

export default Nav;