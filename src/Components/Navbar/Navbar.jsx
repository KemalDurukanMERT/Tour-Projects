import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/" className='link'>Main</Link>
            <Link to="/aboutus" className='link'>About Us</Link>
            <Link to="/services" className='link'>Services</Link>
            <Link to="/contact" className='link'>Contact</Link>
        </div>
    )
}

export default Navbar;