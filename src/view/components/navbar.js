import { Link } from 'react-router-dom';
import React from 'react';
import home from '../../image/home.webp';
import search from '../../image/search.webp';
import star from '../../image/star.svg';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Link className="navbar-brand" to="/">Pokemonch</Link>

                <ul>
                    <li><Link to="/"><div><img src={home} alt="Home"/>Home</div></Link></li>
                    <li><Link to="/search"><div><img src={search} alt="Home"/>Search</div></Link></li>
                    <li><Link to="/favorite"><div><img src={star} alt="Home"/>Favorite</div></Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
