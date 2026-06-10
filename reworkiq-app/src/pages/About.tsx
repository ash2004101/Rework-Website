import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full mb-stack-md uppercase tracking-wider">Our Identity</span>
            <h1 className="font-headline-xl text-headline-xl mb-stack-md leading-tight">
              We're Not Just Developers.<br />
              <span className="text-secondary">We're Your Digital Growth Partners.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-stack-lg">
              At ReWorkIQ, we look beyond the code. We bridge the gap between technical excellence and business profitability, ensuring your digital presence is a high-performance engine for growth.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="inline-block text-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all">Start Your Journey</Link>
              <Link to="/services" className="inline-block text-center border border-outline text-on-surface px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">Our Process</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Professional collaboration"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BDEmBf5xsh6GDpcahNPJEjwAVUu4vZvWOTmiIY2gq91J5S3QFKhdquRdNK70Mng58zq69RPHWrgnkhuXdduC0zMUopeR-nUzPFCfAJce1H6YsICo1rH_NZI8pW3OWbbGOucf6FTvmkKybUETWlkWRqmDByvOYHroJAnUBg7y3fzARw-v2uMVP7jF6lLzzsUGBQYXpOq3VQ-blOqnYm9j_huTBagqAkl2mUD7JD08gyMwDAAbOLItQXPg3rexV2P8hO0mGVFRt-Ye"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-lg border border-outline-variant hidden md:block" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md">400%</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Avg. Revenue Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center mb-section-gap">
            <div className="order-2 md:order-1">
              <div className="aspect-video rounded-xl bg-primary-container relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-on-primary-container p-gutter">
                  <p className="font-headline-md text-headline-md italic text-center">"Efficiency is not just about speed; it's about direction."</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-stack-md">
              <h2 className="font-headline-lg text-headline-lg">Driven by Durozen Digital Services</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                ReWorkIQ was born from a simple observation by the team at Durozen Digital Services: too many businesses were settling for slow, broken websites that functioned as static brochures rather than active sales tools.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We saw brilliant companies held back by technical debt and poor UX. Our mission became clear: to leverage our deep technical expertise to transform these liabilities into assets. We don't just fix bugs; we re-engineer the digital experience for conversion and scale.
              </p>
            </div>
          </div>
          <div className="bg-primary text-on-primary rounded-xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <span className="font-label-sm text-label-sm text-secondary-fixed mb-4 inline-block uppercase tracking-[0.2em]">The Mission</span>
            <h3 className="font-headline-xl text-headline-xl max-w-4xl mx-auto">
              "To make every website a revenue-generating asset — not just a digital brochure."
            </h3>
          </div>
        </div>
      </section>

      {/* Why We're Different - Bento Grid */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg mb-2">The ReWorkIQ Edge</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Why industry leaders trust us with their digital growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 glass-card p-8 rounded-2xl hover:shadow-2xl transition-all border-l-4 border-l-secondary shadow-lg shadow-primary/5" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontSize: '32px' }}>speed</span>
              <h4 className="font-headline-md text-headline-md mb-2">Performance-First Engineering</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">We prioritize core web vitals and rapid load times. In the digital world, a millisecond is the difference between a bounce and a conversion.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all shadow-lg shadow-primary/5" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontSize: '32px' }}>conversion_path</span>
              <h4 className="font-headline-md text-headline-md mb-2">Conversion UX</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Every pixel serves a purpose. We design for the user journey and the business goal.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all shadow-lg shadow-primary/5" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontSize: '32px' }}>verified_user</span>
              <h4 className="font-headline-md text-headline-md mb-2">Bulletproof Security</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Protecting your data and your reputation with modern security protocols.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 glass-card p-8 rounded-2xl hover:shadow-2xl transition-all border-r-4 border-r-primary shadow-lg shadow-primary/5" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontSize: '32px' }}>analytics</span>
              <h4 className="font-headline-md text-headline-md mb-2">Data-Driven Evolution</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">We don't guess. We use real-time analytics and user behavior data to continuously optimize and scale your platform's performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers That Matter */}
      <section className="py-section-gap bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-lg text-center">
            <div className="p-6">
              <div className="font-headline-xl text-headline-xl text-secondary-fixed mb-2">100+</div>
              <div className="font-label-md text-label-md uppercase tracking-widest opacity-70">Websites Optimized</div>
            </div>
            <div className="p-6">
              <div className="font-headline-xl text-headline-xl text-secondary-fixed mb-2">50+</div>
              <div className="font-label-md text-label-md uppercase tracking-widest opacity-70">Global Clients</div>
            </div>
            <div className="p-6">
              <div className="font-headline-xl text-headline-xl text-secondary-fixed mb-2">4+</div>
              <div className="font-label-md text-label-md uppercase tracking-widest opacity-70">Yrs Experience</div>
            </div>
            <div className="p-6">
              <div className="font-headline-xl text-headline-xl text-secondary-fixed mb-2">48hr</div>
              <div className="font-label-md text-label-md uppercase tracking-widest opacity-70">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 font-label-sm text-label-sm mb-4 rounded-full">Who We Are</span>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">We Turn Digital Traffic into Measurable Growth.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">ReWorkIQ is a specialized conversion rate optimization agency based in Namakkal. We rebuild underperforming websites into high-conversion sales machines.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="bg-[#0D9488] text-white px-6 py-3 font-label-md text-label-md rounded shadow-lg hover:brightness-110 transition-all">Work With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-secondary p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-stack-lg">
            <div className="text-on-secondary">
              <h2 className="font-headline-lg text-headline-lg mb-2">Ready for a Technical Upgrade?</h2>
              <p className="font-body-md text-body-md opacity-90">Let's audit your current platform and find your growth leaks.</p>
            </div>
            <Link to="/contact" className="inline-block text-center bg-on-secondary text-secondary px-10 py-5 rounded-lg font-headline-md text-headline-md font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
              Free Performance Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
