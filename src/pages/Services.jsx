export default function Services() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive trade solutions for complex supply chains</p>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    {/* Export */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem' }}>Export Management</h3>
                            <div style={{ width: '60px', height: '3px', background: 'var(--color-secondary)', marginTop: '0.5rem' }}></div>
                        </div>
                        <div>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>We provide full-service export solutions for Sri Lankan manufacturers, handling everything from market entry strategy to final delivery.</p>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <li>✓ Buyer Identification & vetting</li>
                                <li>✓ Quality Control inspections</li>
                                <li>✓ Export licensing & documentation</li>
                                <li>✓ Cargo insurance & financing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Import */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem' }}>Import Facilitation</h3>
                            <div style={{ width: '60px', height: '3px', background: 'var(--color-secondary)', marginTop: '0.5rem' }}></div>
                        </div>
                        <div>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>We source high-quality industrial machinery, raw materials, and consumer goods for the Sri Lankan market, navigating complex import tariffs and regulations.</p>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <li>✓ Global sourcing network</li>
                                <li>✓ Customs clearing & forwarding</li>
                                <li>✓ Duty calculation & minimization</li>
                                <li>✓ Warehousing & distribution</li>
                            </ul>
                        </div>
                    </div>

                    {/* Trade Facilitation */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem' }}>Trade Documentation</h3>
                            <div style={{ width: '60px', height: '3px', background: 'var(--color-secondary)', marginTop: '0.5rem' }}></div>
                        </div>
                        <div>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Ensuring 100% compliance with international trade laws through meticulous documentation handling.</p>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <li>✓ Letters of Credit (LC) processing</li>
                                <li>✓ Certificates of Origin</li>
                                <li>✓ Phytosanitary certificates</li>
                                <li>✓ Commercial invoices & packing lists</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
