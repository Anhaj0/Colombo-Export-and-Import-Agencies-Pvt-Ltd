export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', paddingBottom: '3rem' }}>
                <div>
                    <h4 style={{ color: 'white' }}>Colombo Export & Import Agencies</h4>
                    <div style={{ width: '40px', height: '2px', background: 'var(--color-secondary)', margin: '1rem 0' }}></div>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '300px' }}>
                        Facilitating seamless global trade since 1998. We bridge Sri Lanka with the world through reliable supply chains and rigorous compliance.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: 'white' }}>Quick Links</h4>
                    <div style={{ width: '40px', height: '2px', background: 'var(--color-secondary)', margin: '1rem 0' }}></div>
                    <ul style={{ lineHeight: '2' }}>
                        <li><a href="/" style={{ opacity: 0.8 }}>Home</a></li>
                        <li><a href="/services" style={{ opacity: 0.8 }}>Our Services</a></li>
                        <li><a href="/markets" style={{ opacity: 0.8 }}>Product Catalog</a></li>
                        <li><a href="/contact" style={{ opacity: 0.8 }}>Contact Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'white' }}>Corporate Office</h4>
                    <div style={{ width: '40px', height: '2px', background: 'var(--color-secondary)', margin: '1rem 0' }}></div>
                    <address style={{ fontStyle: 'normal', opacity: 0.8, lineHeight: '1.8' }}>
                        World Trade Center, Level 25<br />
                        Echelon Square, Colombo 01<br />
                        Sri Lanka<br /><br />
                        T: +94 11 234 5678<br />
                        E: trade@colomboagencies.lk
                    </address>
                </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
                &copy; {new Date().getFullYear()} Colombo Export and Import Agencies (Pvt) Ltd. All Rights Reserved.
            </div>
        </footer>
    );
}
