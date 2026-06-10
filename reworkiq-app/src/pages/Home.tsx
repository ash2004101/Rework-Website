import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  
  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, motionValue, to, duration]);

  const displayValue = useTransform(motionValue, (latest) => Math.round(latest));

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter grid lg:grid-cols-2 gap-stack-lg items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="z-10 text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm mb-4">
              Conversion Rate Optimization Specialists
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-6 tracking-tight leading-tight">
              Is Your Website Costing You Customers?
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl mx-auto lg:mx-0">
              We analyze, redesign, and rebuild websites that actually convert — faster, smarter, and built for results. Transform your digital presence into a 24/7 sales machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="inline-flex bg-[#0D9488] text-white px-8 py-4 rounded-[4px] font-label-md items-center justify-center gap-2 hover:bg-[#0b7a70] transition-colors">
                Get a Free Website Audit
                <span className="material-symbols-outlined text-[18px]">analytics</span>
              </Link>
              <Link to="/about" className="inline-block text-center border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-[4px] font-label-md hover:bg-[#0F172A] hover:text-white transition-all">
                See How It Works
              </Link>
            </div>
          </motion.div>
          <div className="relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
              animate={{ opacity: 1, scale: 1, rotate: 2 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-outline-variant shadow-2xl shadow-primary/10"
            >
              <img
                alt="Dashboard Analytics"
                className="rounded-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIVmAfWJQHhcN-nIOzzhRbis-Nf6oVc3lB8z7e48rhS1RaVvuwatQ5vvS8wpt3ORE4ycSlkREJcI29UA3TfGkpfaZ8tvoxVxdo_U0rPYLex0Jba5w9tM5SXq41nzPEEjMlQD7Cmk6rEe-5bxtEwz1MvpXhqu5cLsfnVX-sYT4pWscpiatXDVMJ3ddryGiS91WmCRDcH7i8dIZo6bv9O3jXQC-MxMBHkDuWn2uviOjyknuhLQrRNdQIsRD86mC-EB3y_HLjOR-FbRJ"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-[#0D9488] text-white p-6 rounded-lg shadow-xl"
              >
                <div className="text-2xl font-bold">+142%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Conversion Lift</div>
              </motion.div>
            </motion.div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <div className="bg-[#0F172A] py-10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-wrap justify-between items-center gap-stack-lg text-white/90 text-center">
            <div className="flex-1 min-w-[200px]">
              <div className="font-headline-md text-headline-md font-bold mb-1">
                <AnimatedCounter to={15} />+
              </div>
              <p className="font-label-sm uppercase tracking-widest opacity-60">Websites Reworked</p>
            </div>
            <div className="flex-1 min-w-[200px] border-x border-white/10 px-4">
              <div className="font-headline-md text-headline-md font-bold mb-1">
                ₹<AnimatedCounter from={999} to={0} duration={2.5} />
              </div>
              <p className="font-label-sm uppercase tracking-widest opacity-60">Hidden Charges</p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-headline-md text-headline-md font-bold mb-1">
                <AnimatedCounter to={48} duration={1.5} />-Hour
              </div>
              <p className="font-label-sm uppercase tracking-widest opacity-60">Response Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do (3-Column Bento) */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Our Methodology</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              We don't just build websites; we engineer conversion pathways using data, psychology, and automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* Analyze */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 card-hover"
            >
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-secondary">troubleshoot</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-[#0F172A]">Analyze</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Deep-dive audits into your current traffic, heatmaps, and drop-off points to identify exactly where you are losing revenue.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  Heatmap Analysis
                </li>
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  Competitor Benchmarking
                </li>
              </ul>
            </motion.div>

            {/* Rework */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 card-hover md:-translate-y-6"
            >
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-secondary">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-[#0F172A]">Rework</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Full-stack redesign focused on UX/UI that guides users naturally toward your "Book" or "Buy" button within seconds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  Speed Optimization
                </li>
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  Mobile-First Framework
                </li>
              </ul>
            </motion.div>

            {/* Automate */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 card-hover md:translate-y-4"
            >
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-secondary">smart_toy</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-[#0F172A]">Automate</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Integrating smart workflows that connect your website directly to your WhatsApp, CRM, and sales pipelines.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  WhatsApp Lead Routing
                </li>
                <li className="flex items-center gap-2 text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  CRM Auto-Sync
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ReWorkIQ? (Asymmetric Layout) */}
      <section className="py-section-gap bg-surface-bright border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row gap-section-gap items-center">
            <div className="lg:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-8">Why Businesses Choose ReWorkIQ</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-outline-variant group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2 text-primary">AI-Powered Optimization</h4>
                    <p className="text-on-surface-variant">We use artificial intelligence to run 1,000s of usability simulations before your site even goes live.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-outline-variant group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2 text-primary">Fixed-Price Commitment</h4>
                    <p className="text-on-surface-variant">No hourly surprises. You get a transparent quote upfront that stays fixed until launch.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-outline-variant group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2 text-primary">2-4 Weeks Turnaround</h4>
                    <p className="text-on-surface-variant">We respect your time. High-performance rebuilds delivered in less than a month, guaranteed.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-outline-variant group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2 text-primary">WhatsApp &amp; CRM Integration</h4>
                    <p className="text-on-surface-variant">Your leads flow directly where you work. No more checking emails for missed sales.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white p-6 rounded-lg border border-outline-variant shadow-sm">
                    <img
                      alt="Professional Support"
                      className="w-full h-40 object-cover rounded-md mb-4"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrov5LtBVYvVgDe8OkXmLrbTXIlcX5Qk9DO1bR956w1v7xAakmV8K21gQLQ7e5UqbIMw6Jd7PIuyfaRPnIGIhESpqY1_ONAoyyI8drdpfwkQDhKm6YUCvV86kYfFUROnJ27SNSaLHTvVQd0JDFEWZtsRYh3iO3FhgLBvTFWEuW_lvOC7q43eKYXZOeUm9vKYDVO8K0CTpvXuMN8kZveD_vZuSeeVHZoxiBFK3_0r_eNJQP7GqaS-Ax-TIteORUsygt8LVudgUoE-0N"
                    />
                    <p className="font-label-sm text-secondary">Expert Support 24/7</p>
                  </div>
                  <div className="bg-[#0D9488] p-6 rounded-lg text-white">
                    <p className="font-headline-md">100%</p>
                    <p className="font-label-sm opacity-80">Security Audit Passed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#0F172A] p-6 rounded-lg text-white">
                    <p className="font-headline-md">99.9%</p>
                    <p className="font-label-sm opacity-80">Uptime Guarantee</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-outline-variant shadow-sm">
                    <img
                      alt="Happy Client"
                      className="w-full h-40 object-cover rounded-md mb-4"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrO_N3LttZ3QdDvKdHYqEC05XknUdyCArV6_az7h5sq9vw91GmoT5LZNGCTEu7y_oroX0y4tqoJW-5FNGcaclqfnzOp5qd_KWyf4ZcRIgqD_tbXTdqL6oJb4j0vlp_umtGF6q3hhMjuAFyMyB1wWMAfp0oHWEUCSQtFTzzB9Jyf4k7X4n_ofA0fLjZKQ5MbxCGIk6hRUrfo97isG7cmqpmJd0XDnLT9WE2aqKmXYcKLzh4fbMrPBCGub6WG0e7Ti06nQpuwkpMr1Xi"
                    />
                    <p className="font-label-sm text-primary">Certified Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16">Trusted by Leaders in South India</h2>
          <div className="grid md:grid-cols-2 gap-stack-lg">
            <div className="bg-surface-container-low p-10 rounded-xl relative">
              <span className="material-symbols-outlined absolute top-6 right-8 text-outline-variant text-[48px]">format_quote</span>
              <p className="font-body-lg text-on-surface mb-8 italic">"ReWorkIQ completely transformed our patient booking experience. Our lead volume from our Namakkal clinic website increased by 60% in just the first month. Their focus on conversion is unmatched."</p>
              <div>
                <p className="font-label-md text-primary">Aditya Raman</p>
                <p className="font-label-sm text-on-surface-variant">Managing Director, Namakkal Health Alliance</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-xl relative">
              <span className="material-symbols-outlined absolute top-6 right-8 text-outline-variant text-[48px]">format_quote</span>
              <p className="font-body-lg text-on-surface mb-8 italic">"The transparency was what sold me. We knew exactly what we were getting for our Coimbatore-based manufacturing firm. The CRM automation saved my sales team 10 hours a week."</p>
              <div>
                <p className="font-label-md text-primary">Karthik Subramanian</p>
                <p className="font-label-sm text-on-surface-variant">CEO, Kovai Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap bg-primary-container text-white text-center">
        <div className="max-w-3xl mx-auto px-gutter">
          <h2 className="font-headline-xl text-headline-xl mb-6">Ready to Turn Your Website Into Your Best Salesperson?</h2>
          <p className="font-body-lg mb-stack-lg opacity-80">
            Get a custom audit of your website's performance and conversion potential. No strings attached, just pure actionable value.
          </p>
          <div className="inline-block p-1 bg-white/10 rounded-lg">
            <Link to="/contact" className="inline-flex bg-[#0D9488] text-white px-10 py-5 rounded-[4px] font-headline-md items-center justify-center gap-3 hover:bg-[#0b7a70] transition-transform active:scale-95">
              Get My Free Audit →
            </Link>
          </div>
          <p className="mt-8 font-label-sm uppercase tracking-widest text-secondary-fixed">Next available slot: Tomorrow, 10:00 AM IST</p>
        </div>
      </section>
    </main>
  );
}
