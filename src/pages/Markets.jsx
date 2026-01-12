export default function Markets() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Markets & Products</h1>
                    <p>Our core commodities and global trading footprint</p>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    <h2 style={{ marginBottom: '2rem' }}>Product Portfolio</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="trade-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Product Line</th>
                                    <th>Specifications</th>
                                    <th>Primary Markets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Agriculture</td>
                                    <td>Ceylon Tea</td>
                                    <td>Bulk, Value-added, Organic, BOPF</td>
                                    <td>Europe, Middle East, Russia</td>
                                </tr>
                                <tr>
                                    <td>Agriculture</td>
                                    <td>Spices</td>
                                    <td>Cinnamon (True), Black Pepper, Cloves</td>
                                    <td>USA, Mexico, Germany</td>
                                </tr>
                                <tr>
                                    <td>Apparel</td>
                                    <td>Finished Garments</td>
                                    <td>Casual wear, Sportswear, Uniforms</td>
                                    <td>UK, USA, Australia</td>
                                </tr>
                                <tr>
                                    <td>Industrial</td>
                                    <td>Rubber Products</td>
                                    <td>Solid Tyres, Surgical Gloves, Mats</td>
                                    <td>Germany, France, USA</td>
                                </tr>
                                <tr>
                                    <td>Coconut</td>
                                    <td>Coconut Substrates</td>
                                    <td>Coco Peat, Grow Bags, Chips</td>
                                    <td>Netherlands, South Korea, Japan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ marginTop: '5rem', marginBottom: '2rem' }}>Import Categories</h2>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <li style={{ background: 'var(--color-bg-light)', padding: '1.5rem', borderLeft: '3px solid var(--color-primary)' }}>
                            <h4 style={{ margin: 0 }}>Industrial Machinery</h4>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Textile, construction, and agricultural equipment.</p>
                        </li>
                        <li style={{ background: 'var(--color-bg-light)', padding: '1.5rem', borderLeft: '3px solid var(--color-primary)' }}>
                            <h4 style={{ margin: 0 }}>Building Materials</h4>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Steel, aluminum fittings, high-grade glass.</p>
                        </li>
                        <li style={{ background: 'var(--color-bg-light)', padding: '1.5rem', borderLeft: '3px solid var(--color-primary)' }}>
                            <h4 style={{ margin: 0 }}>Chemicals</h4>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Industrial solvents, polymers, and resins.</p>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    );
}
