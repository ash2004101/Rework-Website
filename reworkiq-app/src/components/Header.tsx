import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const baseClass = "font-label-md text-label-md transition-colors duration-200";
    if (location.pathname === path) {
      return `${baseClass} text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary pb-1`;
    }
    return `${baseClass} text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-on-secondary`;
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-20">
        <Link to="/" className="flex items-center pl-2">
          <img src="/logo.png" alt="ReWorkIQ Logo" className="h-10 w-auto object-contain scale-[1.5] sm:scale-[2] origin-left" />
        </Link>
        <div className="hidden md:flex items-center gap-stack-lg">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/about')} to="/about">About Us</Link>
          <Link className={getLinkClass('/services')} to="/services">Services</Link>
          <Link className={getLinkClass('/contact')} to="/contact">Contact Us</Link>
        </div>
        <Link to="/contact" className="inline-block text-center bg-[#0D9488] text-white px-6 py-2.5 rounded-[4px] font-label-md cursor-pointer active:scale-95 transition-transform">
          Get Free Audit
        </Link>
      </nav>
    </header>
  );
}
