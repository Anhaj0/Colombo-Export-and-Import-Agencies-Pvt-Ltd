export default function Contact() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Initiate a partnership or request a trade quotation</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>

                        <div>
                            <h2>Inquiry Form</h2>
                            <p style={{ marginBottom: '2rem' }}>Please provide detailed requirements to help us route your inquiry to the correct department.</p>
                            <form>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Company / Organization</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Department</label>
                                    <select className="form-control">
                                        <option>Export Inquiry</option>
                                        <option>Import Sourcing</option>
                                        <option>Logistics & Freight</option>
                                        <option>Administration/Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn">Send Inquiry</button>
                            </form>
                        </div>

                        <div>
                            <h2 style={{ marginBottom: '2rem' }}>Corporate Headquarters</h2>
                            <div style={{ padding: '2rem', background: 'var(--color-bg-light)', borderTop: '3px solid var(--color-primary)' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Colombo Export and Import Agencies (Pvt) Ltd</h4>
                                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                    World Trade Center, Level 25<br />
                                    Echelon Square,<br />
                                    Colombo 01, Sri Lanka.
                                </p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Tel:</strong> +94 11 234 5678</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Fax:</strong> +94 11 234 5679</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@colomboagencies.lk</p>
                                <p><strong>Business Reg:</strong> PV 123456</p>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <h3>Office Hours</h3>
                                <table style={{ width: '100%', marginTop: '1rem' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '0.5rem 0' }}>Monday - Friday</td>
                                            <td style={{ textAlign: 'right' }}>8:30 AM - 5:30 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0.5rem 0' }}>Saturday</td>
                                            <td style={{ textAlign: 'right' }}>9:00 AM - 1:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0.5rem 0' }}>Sunday & Holidays</td>
                                            <td style={{ textAlign: 'right' }}>Closed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
