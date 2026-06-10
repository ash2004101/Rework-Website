import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-section-gap">
        <div className="absolute inset-0 z-0 opacity-10"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 font-label-sm text-label-sm mb-4 rounded-full">Our Services</span>
            <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-primary mb-6 tracking-tight">Everything Your Website Needs. Under One Roof.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">From visual overhauls to deep-layer technical automation, we provide the infrastructure your business needs to scale without friction.</p>
          </motion.div>
        </div>
      </header>

      {/* Service Cards Grid */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Website Rework */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="service-card bg-white border border-outline-variant/50 p-8 flex flex-col h-full rounded-2xl shadow-xl shadow-primary/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">web</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Website Rework</h3>
                <div className="text-secondary font-bold text-lg">₹15,000+</div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">What's included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Complete Visual Overhaul</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Responsive Mobile Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">SEO Structure Alignment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">Ideal for</h4>
                  <p className="font-body-md text-body-md">Businesses with outdated interfaces looking to modernize their professional image.</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Timeline</span>
                  <span className="font-body-md text-body-md font-semibold">10-14 Business Days</span>
                </div>
              </div>
              <Link to="/contact" className="block text-center w-full mt-8 border border-primary text-primary py-3 font-label-md text-label-md rounded hover:bg-primary hover:text-white transition-colors">Select Rework</Link>
            </motion.div>

            {/* Card 2: Automation Process */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="service-card bg-white/90 backdrop-blur-md border border-secondary/50 p-8 flex flex-col h-full rounded-2xl shadow-2xl shadow-secondary/10 relative overflow-hidden md:-translate-y-6 hover:-translate-y-8 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 font-label-sm text-label-sm rounded-bl-lg">MOST POPULAR</div>
              <div className="mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">settings_suggest</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Automation Process</h3>
                <div className="text-secondary font-bold text-lg">₹12,000+</div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">What's included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Workflow Optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">API &amp; CRM Integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Email Automation Sequences</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">Ideal for</h4>
                  <p className="font-body-md text-body-md">Growing teams spending too much time on manual data entry and repetitive tasks.</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Timeline</span>
                  <span className="font-body-md text-body-md font-semibold">7-10 Business Days</span>
                </div>
              </div>
              <Link to="/contact" className="block text-center w-full mt-8 bg-[#0D9488] text-white py-3 font-label-md text-label-md rounded-lg shadow-lg hover:brightness-110 transition-all">Select Automation</Link>
            </motion.div>

            {/* Card 3: Lead Form & Client Onboarding */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="service-card bg-white border border-outline-variant/50 p-8 flex flex-col h-full rounded-2xl shadow-xl shadow-primary/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">person_add</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Lead &amp; Onboarding</h3>
                <div className="text-secondary font-bold text-lg">₹8,000+</div>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">What's included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Dynamic Form Generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Auto-Response Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Qualification Logic</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">Ideal for</h4>
                  <p className="font-body-md text-body-md">Service providers needing to filter leads and collect client data automatically.</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Timeline</span>
                  <span className="font-body-md text-body-md font-semibold">3-5 Business Days</span>
                </div>
              </div>
              <Link to="/contact" className="block text-center w-full mt-8 border border-primary text-primary py-3 font-label-md text-label-md rounded hover:bg-primary hover:text-white transition-colors">Select Lead Form</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="w-full h-px bg-outline-variant"></div>

      {/* Detailed Comparison Table */}
      <section className="py-section-gap bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Detailed Feature Comparison</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Compare our key services to find the right architectural fit for your digital presence.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline">
                  <th className="py-6 px-4 font-headline-md text-headline-md text-primary w-1/4">Feature</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-secondary uppercase tracking-widest bg-surface-container-low">Rework</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-secondary uppercase tracking-widest bg-surface-container">Automation</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-secondary uppercase tracking-widest bg-surface-container-high">Lead Form</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md">
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">UI/UX Redesign</td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">Database Integration</td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">Cross-Platform Sync</td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">Mobile Optimization</td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">Custom Logic &amp; Filters</td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-outline">horizontal_rule</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                  <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span></td>
                </tr>
                <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="py-6 px-4 font-semibold text-primary">Post-Launch Support</td>
                  <td className="py-6 px-4 text-center">30 Days</td>
                  <td className="py-6 px-4 text-center">60 Days</td>
                  <td className="py-6 px-4 text-center">15 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-section-gap bg-primary-container relative">
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">Unsure where to start?</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-xl mx-auto">Book a free 15-minute consultation with our automation experts to audit your current workflow.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block text-center bg-white text-primary px-10 py-4 font-label-md text-label-md rounded-lg hover:bg-surface-variant transition-colors">Book Consultation</Link>

          </div>
        </div>
      </section>
    </main>
  );
}
