export default function Compliance() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Compliance & Standards</h1>
                    <p>Commitment to quality, ethics, and international regulations</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>
                            At Colombo Agencies, we view compliance not as a requirement but as a competitive advantage. Our rigorous internal processes ensure every shipment meets the destination country's legal and quality standards.
                        </p>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>ISO</div>
                                <div>
                                    <h3>ISO 9001:2015 Certified</h3>
                                    <p>We maintain a quality management system that ensures consistency in our service delivery and vendor vetting processes.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>GMP</div>
                                <div>
                                    <h3>Good Manufacturing Practices</h3>
                                    <p>We strictly source from suppliers who adhere to GMP, especially for our food and agricultural exports.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>SEDEX</div>
                                <div>
                                    <h3>Ethical Trading</h3>
                                    <p>We are a member of SEDEX, committed to ethical supply chains, fair labor practices, and environmental responsibility.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>C-TPAT</div>
                                <div>
                                    <h3>Supply Chain Security</h3>
                                    <p>Our logistics partners are vetted for security to minimize risks of tampering during transit, aligning with C-TPAT guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
