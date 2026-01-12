import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '8rem 0',
                backgroundImage: 'linear-gradient(rgba(26, 38, 57, 0.9), rgba(26, 38, 57, 0.8)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', maxWidth: '800px', marginBottom: '1.5rem' }}>Sri Lanka's Premier Gateway to Global Trade</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem', opacity: 0.9, lineHeight: '1.6' }}>
                        We facilitate seamless export and import operations, ensuring regulatory compliance and logistical efficiency for international partners.
                    </p>
                    <Link to="/services" className="btn btn-secondary">Explore Capabilities</Link>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Operational Excellence</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Global Reach</h3>
                            <p>Establishing reliable trade corridors between Sri Lanka, Europe, Asia, and North America since 1998.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Trade Expertise</h3>
                            <p>Deep knowledge of Incoterms, customs tariffs, and bilateral trade agreements to minimize risk.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Logistics Management</h3>
                            <p>End-to-end freight solutions ensuring timely delivery of bulk commodities and specialized cargo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2>Bridging Markets</h2>
                        <p style={{ margin: '1.5rem 0' }}>
                            As a fully licensed export-import entity, we serve as the strategic node for businesses seeking to source premium Sri Lankan products or introduce international goods to the island.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Our infrastructure supports high-volume transactions with a focus on transparency and procedural integrity, adhering to global standards such as ISO and HAACP.
                        </p>
                        <Link to="/contact" className="btn">Partner With Us</Link>
                    </div>
                    <div>
                        <div style={{ background: 'white', padding: '2rem', borderLeft: '4px solid var(--color-secondary)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Key Trade Statistics</h4>
                            <ul style={{ lineHeight: '2.2' }}>
                                <li><strong>25+</strong> Export Destinations</li>
                                <li><strong>500+</strong> Metric Tons Monthly Volume</li>
                                <li><strong>98%</strong> On-Time Delivery Rate</li>
                                <li><strong>0</strong> Compliance Violations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
