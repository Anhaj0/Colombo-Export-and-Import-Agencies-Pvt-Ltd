import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="main-header">
            <div className="top-bar">
                <div className="container">
                    <span>📍 Colombo 01, Sri Lanka</span>
                    <span>📞 +94 11 234 5678</span>
                    <span>✉️ info@colomboagencies.lk</span>
                </div>
            </div>

            <nav className="container navbar-container">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <span className="logo-main">COLOMBO</span>
                        <span className="logo-sub">Export & Import Agencies</span>
                    </Link>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`nav-links-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/markets" className={isActive('/markets')} onClick={closeMenu}>Markets & Products</Link></li>
                        <li><Link to="/compliance" className={isActive('/compliance')} onClick={closeMenu}>Compliance</Link></li>
                        <li><Link to="/contact" className="btn btn-nav" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
