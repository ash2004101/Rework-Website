import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container dark:bg-tertiary-container text-on-primary-container dark:text-on-tertiary-container w-full">
      <div className="max-w-container-max mx-auto px-gutter py-section-gap grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
        <div className="space-y-4">
          <div className="-ml-1 mb-2 inline-block bg-white p-2 rounded-lg">
            <img src="/logo.png" alt="ReWorkIQ Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="font-body-md opacity-80">Building high-conversion digital experiences for modern enterprises.</p>
        </div>
        <div>
          <h4 className="font-label-md mb-6 uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-3">
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/services">CRO Audit</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/services">Website Redesign</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/services">Sales Automation</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/services">Cloud Hosting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md mb-6 uppercase tracking-wider text-white">Company</h4>
          <ul className="space-y-3">
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/about">About Us</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/">Privacy Policy</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/">Terms of Service</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 transition-opacity" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md mb-6 uppercase tracking-wider text-white">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">dine_in</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 text-center">
        <p className="font-label-sm opacity-60 text-white">© 2024 ReWorkIQ. Powered by Durozen Digital Services</p>
      </div>
    </footer>
  );
}
