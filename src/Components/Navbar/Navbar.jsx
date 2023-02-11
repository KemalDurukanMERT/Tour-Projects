import './Navbar.scss';


const Navbar = () => {
    return(
        <div className="navbar">
            <a href="/">Main</a>
            <a href="/aboutus">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default Navbar;