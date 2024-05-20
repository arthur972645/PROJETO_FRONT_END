
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <Link to="/"> Home </Link>
            <span> | </span>
            <Link to="/contact" > Contact </Link>
        </nav>
    )
}

export default Header;
