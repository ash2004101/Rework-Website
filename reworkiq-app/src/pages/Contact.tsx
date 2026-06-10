import { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-outline-variant rounded-lg bg-surface-container-lowest overflow-hidden">
      <button 
        className="w-full p-6 text-left flex justify-between items-center hover:bg-surface-container-low transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-label-md text-label-md text-primary">{question}</span>
        <span 
          className="material-symbols-outlined transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </button>
      <div 
        className={`p-6 pt-0 border-t border-outline-variant font-body-md text-body-md text-on-surface-variant ${isOpen ? 'block' : 'hidden'}`}
      >
        {answer}
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const GOOGLE_SCRIPT_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SCRIPT_WEB_APP_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.result === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('There was a problem submitting your request. Please try again or email us directly.');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <header className="relative pt-section-gap pb-4 overflow-hidden bg-surface">
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-4">Let's Talk About Your Website.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80">Whether you're looking for a performance audit, SEO overhaul, or complete technical redesign, our experts are ready to help you scale.</p>
          </div>
        </div>
        {/* Subtle technical grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </header>

      {/* Contact & Form Section */}
      <section className="py-section-gap bg-surface-main">
        <div className="max-w-container-max mx-auto px-gutter space-y-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-16">
            {/* Contact Details (Left) */}
            <div className="bg-surface-container-lowest p-stack-lg border border-outline-variant rounded-lg flex flex-col shadow-sm">
              <div className="space-y-8 mb-8">
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-secondary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">Email Us</p>
                      <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="mailto:hello@reworkiq.com">hello@reworkiq.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-secondary">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">WhatsApp</p>
                      <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="tel:+918122339694">+91 81223 39694</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-secondary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">Office Location</p>
                      <p className="font-body-md text-body-md text-on-surface-variant">Namakkal, Tamil Nadu 637001</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant mt-auto">
                <h4 className="font-label-md text-label-md text-primary mb-4">Availability</h4>
                <div className="space-y-3">
                  <div className="flex justify-between font-body-md text-body-md">
                    <span className="text-on-surface-variant">Working Hours:</span>
                    <span className="text-primary font-semibold">10:00 AM - 07:00 PM IST</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md">
                    <span className="text-on-surface-variant">Response Guarantee:</span>
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-label-sm">Under 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="bg-surface-container-lowest p-stack-lg border border-outline-variant rounded-lg shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className="bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#0D9488] p-4 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined">check_circle</span>
                    <div>
                      <h4 className="font-headline-sm font-bold mb-1">Message Sent Successfully!</h4>
                      <p className="font-body-sm text-sm">Thank you for reaching out. Our team will review your request and get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-error/10 border border-error/30 text-error p-4 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined">error</span>
                    <p className="font-body-sm text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} disabled={submitStatus === 'submitting'} className="w-full bg-surface border border-outline-variant rounded-DEFAULT p-3 font-body-md text-body-md form-input-focus disabled:opacity-50" placeholder="John Doe" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Work Email *</label>
                    <input name="email" value={formData.email} onChange={handleChange} disabled={submitStatus === 'submitting'} className="w-full bg-surface border border-outline-variant rounded-DEFAULT p-3 font-body-md text-body-md form-input-focus disabled:opacity-50" placeholder="john@company.com" required type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} disabled={submitStatus === 'submitting'} className="w-full bg-surface border border-outline-variant rounded-DEFAULT p-3 font-body-md text-body-md form-input-focus disabled:opacity-50" placeholder="+91 00000 00000" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Interest In *</label>
                    <select name="interest" value={formData.interest} onChange={handleChange} disabled={submitStatus === 'submitting'} className="w-full bg-surface border border-outline-variant rounded-DEFAULT p-3 font-body-md text-body-md form-input-focus appearance-none disabled:opacity-50" required>
                      <option disabled value="">Select a Service</option>
                      <option value="audit">Website Audit</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="development">Full-Stack Development</option>
                      <option value="automation">Automation Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} disabled={submitStatus === 'submitting'} className="w-full bg-surface border border-outline-variant rounded-DEFAULT p-3 font-body-md text-body-md form-input-focus disabled:opacity-50" placeholder="Tell us about your project goals and current challenges..." required rows={4}></textarea>
                </div>
                <div className="pt-4">
                  <button disabled={submitStatus === 'submitting'} className="w-full md:w-auto bg-[#0D9488] text-white px-12 py-4 rounded-DEFAULT font-label-md text-label-md hover:brightness-110 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2" type="submit">
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {submitStatus === 'submitting' ? (
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                    ) : (
                      <span className="material-symbols-outlined">send</span>
                    )}
                  </button>
                  <p className="mt-4 font-label-sm text-label-sm text-outline">By clicking send, you agree to our Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>

          {/* Full Width Map */}
          <div className="rounded-lg overflow-hidden border border-outline-variant h-[400px] relative shadow-sm">
            <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
              <div className="text-center p-6">
                <span className="material-symbols-outlined text-4xl text-outline mb-2">map</span>
                <p className="font-label-md text-label-md text-outline">Map of Namakkal Center</p>
              </div>
            </div>
            <img className="w-full h-full object-cover mix-blend-multiply opacity-40 hover:opacity-70 transition-opacity duration-500 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk2p9I8J3Zqk-j8glSuViUgVsnnGTjKcDu0K2XYX8J0fmqA6pK_cuYnsxdHoLN72RDQGLQiH9NZaZCmzEF1DOcipLxgQnIUj8NxLZ356iAh7dngTJ5s38Ob8O174IaKFRyun7aaPOXDuEaJA1L1_rKPQQeNCKIwzyWNTQETJ1xckKcsV_OcTrJj_XWjGlRFbH9LHAM3ictD7aPw8tGnRq_aNXc4BkC81gGmo89EfIlS-T38N_5d16Q7t2reZBbVvBGlw80dV0YKxiS" alt="Office Location Map" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Common inquiries about our consulting process and technical approach.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <FaqItem 
              question="How long does a website audit take?"
              answer="Our comprehensive technical audit typically takes 3 to 5 business days. This allows our experts to manually review your codebase, performance metrics, and SEO architecture to provide actionable insights."
            />
            <FaqItem 
              question="Do you offer ongoing maintenance packages?"
              answer="Yes, ReWorkIQ provides tiered maintenance plans that include security updates, speed monitoring, and content optimization to ensure your site continues to perform at its peak."
            />
            <FaqItem 
              question="What industries do you specialize in?"
              answer="We primarily serve technical B2B services, SaaS platforms, and high-growth E-commerce brands where site performance directly correlates to business revenue."
            />
            <FaqItem 
              question="Can you help with local SEO in Namakkal?"
              answer="Absolutely. Being based in Namakkal, we have a deep understanding of the local digital landscape and can help optimize your presence for the Indian market as well as global audiences."
            />
            <FaqItem 
              question="What is your pricing structure?"
              answer="We work on both project-based and retainer models. After our initial audit or consultation, we provide a transparent, flat-fee proposal based on your specific requirements and expected ROI."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
