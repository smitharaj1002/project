
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/faculty">Faculty Details</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/placements">Placement Details</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
