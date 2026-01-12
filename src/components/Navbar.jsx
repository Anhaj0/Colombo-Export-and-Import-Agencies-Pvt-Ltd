import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header style={{ borderBottom: '3px solid var(--color-secondary)' }}>
            <div className="top-bar" style={{ background: '#f1f1f1', padding: '0.5rem 0', fontSize: '0.85rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
                    <span>📍 Colombo 01, Sri Lanka</span>
                    <span>📞 +94 11 234 5678</span>
                    <span>✉️ info@colomboagencies.lk</span>
                </div>
            </div>

            <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)', lineHeight: '1' }}>COLOMBO</span>
                        <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>Export & Import Agencies</span>
                    </Link>
                </div>

                <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
                    <li><Link to="/" style={{ color: isActive('/') ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Home</Link></li>
                    <li><Link to="/services" style={{ color: isActive('/services') ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Services</Link></li>
                    <li><Link to="/markets" style={{ color: isActive('/markets') ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Markets & Products</Link></li>
                    <li><Link to="/compliance" style={{ color: isActive('/compliance') ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Compliance</Link></li>
                    <li><Link to="/contact" className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}
