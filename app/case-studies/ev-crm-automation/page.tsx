import Link from "next/link";

export default function EVCaseStudy() {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
            

            <div className="max-w-5xl mx-auto px-6">

                {/* Hero */}
                <h1 className="text-4xl md:text-5xl tracking-tight text-center font-heading text-purple-800 mb-6 leading-tight">
                    How <span className="font-bold">RICILIX</span> Transformed EV Charger Operations
                    with a Centralized <span className="font-bold">CRM</span> & Automation Ecosystem
                </h1>


                <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
                    A fast-growing EV charger sales and installation company operating across
                    B2B, B2C, and B2B2C models faced operational inefficiencies caused by fragmented
                    systems and disconnected data sources. RICILIX designed and implemented a
                    structured, Six Sigma–aligned CRM and automation ecosystem that centralized
                    operations and enabled scalable growth.
                </p>

                {/* Client Overview */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-4">
                    Client Overview
                </h2>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                    The company managed leads, installations, and customer support across email inboxes,
                    Jumptech, legacy Typeform surveys, and internal databases. As installation
                    volumes increased, operational complexity grew rapidly, affecting response times,
                    data accuracy, and scalability.
                </p>

                {/* Define Phase */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-4">
                    Define Phase — Problem Statement
                </h2>

                <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
                    <p className="text-neutral-700 mb-4">
                        Customer and installation data existed across multiple disconnected systems,
                        causing manual tracking, inconsistent records, and delayed support handling.
                    </p>

                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                        <li>3+ disconnected data platforms</li>
                        <li>Manual searching across inboxes and databases</li>
                        <li>Duplicate and incomplete records</li>
                        <li>No unified installation visibility</li>
                        <li>Inefficient EV charger support workflows</li>
                    </ul>
                </div>

                <p className="text-neutral-700 mb-10">
                    <strong>Project Goal:</strong> Reduce manual tracking by at least 60%, improve data accuracy,
                    and establish a single source of truth for all customer and installation data.
                </p>

                {/* Measure & Analyze */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-4">
                    Measure & Analyze Phase
                </h2>

                <p className="text-neutral-700 mb-6">
                    RICILIX conducted a full system audit identifying three primary data sources:
                </p>

                <ul className="list-disc pl-6 text-neutral-700 space-y-3 mb-8">
                    <li><strong>Jumptech:</strong> Basic customer identifiers and project source data</li>
                    <li><strong>Hybrid Quote Database:</strong> Technical installation specifications</li>
                    <li><strong>Typeform (Legacy):</strong> Historical lead and survey submissions</li>
                </ul>

                <p className="text-neutral-700 mb-10">
                    Root causes included data silos, lack of standardized structures,
                    missing technical installation data in primary systems, and CRM limitations
                    due to complex B2B2C relationships.
                </p>

                {/* Improve Phase */}
                <h2 className="text-3xl leading-tight tracking-tight font-heading text-purple-800 mb-4">
                    Improve Phase — RICILIX Solution
                </h2>

                <div className="space-y-8 mb-12">

                    <div>
                        <h3 className="text-xl font-heading text-purple-700 mb-2">
                            1. Centralized CRM Architecture
                        </h3>
                        <p className="text-neutral-700">
                            HubSpot was implemented as a unified CRM with custom properties capturing
                            electrical phase configuration, installation conditions, parking accessibility,
                            and solar/battery infrastructure.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl leading-tight tracking-tight font-heading text-purple-700 mb-2">
                            2. Multi-Source Data Engineering & Migration
                        </h3>
                        <p className="text-neutral-700">
                            Using Python-based processing, thousands of historical records were cleaned,
                            standardized, deduplicated, validated, and migrated into HubSpot with
                            structured mapping logic.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl leading-tight tracking-tight font-heading text-purple-700 mb-2">
                            3. B2B2C Operational Modeling
                        </h3>
                        <p className="text-neutral-700">
                            Custom HubSpot objects were created to model installations and partner
                            relationships without relying solely on email-based contact logic,
                            preserving accurate lifecycle tracking.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl leading-tight tracking-tight font-heading text-purple-700 mb-2">
                            4. Automation & Integration
                        </h3>
                        <p className="text-neutral-700">
                            Zapier automation connected survey systems directly with HubSpot,
                            enabling automatic contact creation, real-time source attribution,
                            and zero manual data entry.
                        </p>
                    </div>

                </div>

                {/* Results */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-6">
                    Results & Business Impact
                </h2>

                <div className="bg-purple-50 p-8 rounded-2xl mb-10">
                    <ul className="space-y-3 text-neutral-800">
                        <li>✔ 75% reduction in manual tracking workload</li>
                        <li>✔ 90% faster customer data retrieval</li>
                        <li>✔ 100% centralized visibility across installations</li>
                        <li>✔ Significant reduction in duplicate records</li>
                        <li>✔ Fully automated lead processing</li>
                    </ul>
                </div>

                {/* Before / After */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-6">
                    Operational Performance Comparison
                </h2>

                <div className="overflow-x-auto mb-12">
                    <table className="min-w-full bg-white border border-neutral-200 rounded-xl">
                        <thead className="bg-purple-100">
                            <tr>
                                <th className="p-4 text-left">Metric</th>
                                <th className="p-4 text-left">Before RICILIX</th>
                                <th className="p-4 text-left">After RICILIX</th>
                            </tr>
                        </thead>
                        <tbody className="text-neutral-700">
                            <tr className="border-t">
                                <td className="p-4">Platforms Used</td>
                                <td className="p-4">3–4 Systems</td>
                                <td className="p-4">1 Centralized CRM</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">Customer Lookup Time</td>
                                <td className="p-4">10–15 Minutes</td>
                                <td className="p-4">&lt; 60 Seconds</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">Manual Tracking</td>
                                <td className="p-4">High</td>
                                <td className="p-4">Reduced by 75%</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">Lead Processing</td>
                                <td className="p-4">Manual</td>
                                <td className="p-4">Fully Automated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Why It Matters */}
                <h2 className="text-2xl leading-tight tracking-tight font-heading text-purple-700 mb-4">
                    Why This Matters
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-12">
                    This transformation moved the client from reactive manual operations
                    to a scalable, process-driven system aligned with modern EV infrastructure growth.
                    RICILIX did not simply implement tools — it redesigned the operational data flow
                    using Six Sigma principles, enabling confident expansion and improved customer experience.
                </p>

            </div>
            <div className="ml-8 text-center">
                <Link href="/">
                    <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
                        ← Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
}
