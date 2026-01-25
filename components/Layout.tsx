import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { IMAGES } from '../images';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Instant scroll to top on route change to prevent retaining scroll position
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-rust selection:text-white">
      
      {/* Navigation - Always visible background */}
      <nav 
        className={`fixed top-0 z-[60] w-full transition-all duration-500 border-b border-ink/5 bg-paper shadow-sm py-4`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Brand - Logo Image (Left) */}
          <div 
            onClick={() => { 
              navigate('/'); 
              setIsMobileMenuOpen(false);
            }}
            className="cursor-pointer z-50 shrink-0"
          >
             <img 
               src={IMAGES.NAV_LOGO} 
               alt="Drew Bordeaux" 
               className="h-16 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity"
             />
          </div>

          {/* Desktop Nav - Right Aligned */}
          <div className="hidden md:flex items-center space-x-12 ml-auto">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:text-rust ${isActive ? 'text-rust' : 'text-ink'}`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>

          {/* Mobile Menu Button - Right (Visible on mobile) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-ink hover:text-rust transition-colors z-50 ml-auto"
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Nav Overlay - z-[55] to sit above grain (z-50) but below Nav Bar (z-60) */}
        <div className={`fixed inset-0 bg-paper z-[55] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className="font-serif text-5xl md:text-6xl font-bold text-ink hover:text-rust tracking-tight transition-colors"
              >
                {link.label}
              </RouterNavLink>
            ))}
        </div>
      </nav>

      {/* Main Content */}
      <main key={location.pathname} className="flex-grow relative z-10 w-full animate-enter pt-24 md:pt-36">
        {children}
      </main>

      {/* Footer - High Contrast Dark Section */}
      <footer className="relative z-10 bg-charcoal text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
             
             <div className="space-y-4">
                <img 
                   src={IMAGES.NAV_LOGO} 
                   alt="Drew Bordeaux" 
                   className="h-20 w-auto object-contain opacity-10 grayscale invert select-none"
                />
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm">
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold">Listen</h4>
                  <ul className="space-y-2 text-stone hover:text-white transition-colors">
                    <li><a href="https://open.spotify.com/artist/3FoGO6FW2T3cffSg7SSjaW" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">Spotify</a></li>
                    <li><a href="https://music.apple.com/us/album/impulse-instinct/1568047199" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">Apple Music</a></li>
                    <li><a href="https://www.youtube.com/@drewbordeaux569/videos" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">YouTube</a></li>
                    <li><a href="https://drewbordeaux.bandcamp.com/album/impulse-instinct" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">Bandcamp</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold">Social</h4>
                  <ul className="space-y-2 text-stone hover:text-white transition-colors">
                    <li><a href="https://www.instagram.com/drewsounds/" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">Instagram</a></li>
                    <li><a href="https://www.facebook.com/drewbordeaux/" target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">Facebook</a></li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold">Contact</h4>
                  <ul className="space-y-2 text-stone hover:text-white transition-colors">
                    <li><Link to="/contact" className="hover:text-rust transition-colors">Booking</Link></li>
                    <li><Link to="/press" className="hover:text-rust transition-colors">Press Inquiries</Link></li>
                    <li><Link to="/producer" className="hover:text-rust transition-colors">Production</Link></li>
                    <li className="pt-2"><a href="https://drewimages.studio" target="_blank" rel="noreferrer" className="text-white/60 hover:text-rust transition-colors">DrewImages.Studio</a></li>
                  </ul>
                </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest text-white/30">
            <span>© {new Date().getFullYear()} Drew Bordeaux. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;