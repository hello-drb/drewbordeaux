import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useShows } from '../hooks/useShows';
import { IMAGES } from '../images';
import { ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  const { shows, loading } = useShows();
  const homeShows = shows.slice(0, 4);

  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsNewsletterSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
       alert("Error submitting. Please check your connection.");
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* 
        1. CINEMATIC HERO 
      */}
      <section className="relative h-[85vh] w-full flex items-end justify-center overflow-hidden pb-12">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
               src={IMAGES.HERO_BACKGROUND}
               alt="Drew Bordeaux" 
               className="w-full h-full object-cover"
               style={{ objectPosition: 'center 15%' }} 
             />
             <div className="absolute inset-0 bg-black/30" />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 animate-enter w-full px-4">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Button to="/music" variant="primary">Stream Music</Button>
                <Button to="/live" variant="outline">Tour Dates</Button>
            </div>

            <h1 className="text-white/60 text-[10px] md:text-xs tracking-[0.4em] font-sans uppercase font-medium text-center">
               Songwriter &nbsp;•&nbsp; Recording Artist &nbsp;•&nbsp; Producer
            </h1>
        </div>
      </section>

      {/* 
        2. TOUR DATES
        Style: Charcoal (Dark)
      */}
      <section className="py-24 md:py-32 bg-charcoal text-white px-6">
        <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
                <h3 className="font-display uppercase text-5xl md:text-7xl text-paper tracking-wide">Upcoming Live</h3>
                <Link to="/live" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-rust hover:text-white transition-colors">
                    View All Dates <ArrowRight size={16} />
                </Link>
            </div>

            <div className="flex flex-col">
                {loading && <div className="py-12 text-center text-stone font-mono uppercase">Loading...</div>}

                {!loading && homeShows.map((show) => (
                    <div key={show.id} className="group flex flex-col md:flex-row md:items-center py-8 border-b border-white/10 hover:border-rust/50 hover:bg-white/5 transition-all duration-300 px-4 -mx-4">
                        {/* Date */}
                        <div className="md:w-1/4 mb-2 md:mb-0">
                            <span className="block font-display text-3xl md:text-4xl text-paper group-hover:text-rust transition-colors tracking-wide">{show.date}</span>
                            <span className="text-xs text-stone uppercase tracking-wider font-bold">{show.time || '8:00 PM'}</span>
                        </div>

                        {/* Venue */}
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <h4 className="font-sans text-xl md:text-2xl font-light text-white/90">{show.venue}</h4>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm text-stone uppercase tracking-wide font-bold">{show.city}</span>
                                {show.guests && <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded text-white/60 uppercase">w/ {show.guests[0]}</span>}
                            </div>
                        </div>

                        {/* Button (Conditional) */}
                        <div className="md:w-1/4 flex justify-start md:justify-end">
                             {show.ticketLink && (
                               <a href={show.ticketLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] px-6 py-3 group-hover:bg-rust group-hover:border-rust group-hover:text-white transition-all cursor-pointer">
                                  Get Tickets
                               </a>
                             )}
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="mt-12 text-center md:hidden">
                <Link to="/live" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-rust hover:text-white transition-colors">
                    View All Dates <ArrowRight size={16} />
                </Link>
            </div>
        </div>
      </section>

      {/* 
        3. IMPULSE / INSTINCT
        Style: Paper (Light)
      */}
      <section className="py-24 md:py-32 bg-paper relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
            
            {/* Content (Left on Desktop) */}
            <div className="text-center md:text-right space-y-8 order-2 md:order-1">
                <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
                    <span className="text-stone text-xs uppercase tracking-[0.3em] font-bold">Debut Album</span>
                    <div className="w-12 h-[1px] bg-stone"></div>
                </div>
                
                <h2 className="font-display uppercase text-6xl md:text-8xl text-ink tracking-wide leading-[0.9]">
                  Impulse <br /><span className="text-rust">/ Instinct</span>
                </h2>
                
                <p className="font-sans font-light text-lg text-stone leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
                    Featuring "Alkaline" and the anthemic reworking of "Land of Confusion".
                </p>

                <div className="pt-8 flex flex-wrap gap-4 justify-center md:justify-end">
                    <Button to="/music" variant="primary">Listen Now</Button>
                </div>
            </div>

            {/* Album Art (Right on Desktop) */}
            <div className="relative group perspective-1000 order-1 md:order-2">
                <div className="absolute -inset-4 bg-charcoal/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                    src={IMAGES.IMPULSE_INSTINCT_COVER} 
                    alt="Impulse / Instinct" 
                    className="relative z-10 w-full max-w-lg mx-auto md:mr-0 shadow-2xl rounded-sm border border-charcoal/10 transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]"
                />
            </div>
         </div>
      </section>

      {/* 
        4. ARTIST STATEMENT / BIO TEASER 
        Style: SPRUCE (Deep Green).
      */}
      <section className="py-32 px-6 bg-spruce flex items-center justify-center relative overflow-hidden">
         {/* Texture Overlay */}
         <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
         
         <div className="max-w-4xl text-center space-y-12 relative z-10">
            <div className="flex justify-center">
                <Star className="text-paper w-8 h-8 fill-current opacity-80" />
            </div>
            
            <h3 className="font-serif italic text-2xl md:text-3xl leading-relaxed text-white drop-shadow-sm max-w-3xl mx-auto">
               "Bordeaux operates at the intersection of visceral performance and sophisticated production."
            </h3>
            
            <div className="w-16 h-[2px] bg-white/30 mx-auto"></div>
            
            <p className="font-sans text-white/90 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
               A New York–based artist and producer, Drew Bordeaux builds his music around percussive acoustic rhythm and the electric violin’s searing textures. From his solo debut <em className="font-serif italic text-white">Impulse / Instinct</em> to his production work on Becki Davis’s <em className="font-serif italic text-white">Lost & Found</em>, Bordeaux’s work reflects a consistent focus on craft, cohesion, and long-form artistic vision.
            </p>

            <div className="pt-8 flex flex-col items-center gap-6">
               <Link to="/bio" className="text-xs font-bold uppercase tracking-[0.25em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors">
                  Read Full Bio
               </Link>
            </div>
         </div>
      </section>

      {/* 
        5. LATEST RELEASE PROMO (Dust Between Galaxies)
        Style: CHARCOAL (Dark) for contrast against art.
      */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
         {/* Subtle rust accent light */}
         <div className="absolute bottom-0 left-0 w-1/2 h-full bg-rust/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

         <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
            
            {/* Album Art (Left) */}
            <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                    src={IMAGES.DUST_BETWEEN_GALAXIES_COVER} 
                    alt="Dust Between Galaxies" 
                    className="relative z-10 w-full max-w-lg mx-auto md:ml-0 shadow-2xl rounded-sm border border-white/10 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
                />
            </div>

            {/* Content (Right) */}
            <div className="text-center md:text-left space-y-8">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="w-12 h-[1px] bg-rust"></div>
                    <span className="text-rust text-xs uppercase tracking-[0.3em] font-bold">Upcoming Release</span>
                </div>
                
                <h2 className="font-display uppercase text-6xl md:text-8xl text-white tracking-wide leading-[0.9]">
                  Dust Between <br /><span className="text-white/40">Galaxies</span>
                </h2>
                
                <div className="pt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button href="#" variant="outline">Pre-Save</Button>
                </div>
            </div>
         </div>
      </section>

      {/* 
        6. NEWSLETTER
        Style: SAND (Slightly darker than Paper)
      */}
      <section className="py-24 bg-sand px-6">
         <div className="max-w-xl mx-auto text-center space-y-6">
            <h3 className="font-display uppercase text-3xl md:text-4xl text-charcoal tracking-wide">Newsletter</h3>
            <p className="text-stone text-sm font-sans font-light">
                Sign up for updates on new music and tour dates.
            </p>
            
            {isNewsletterSubmitted ? (
                <div className="py-8 animate-enter space-y-2">
                    <p className="font-display uppercase text-xl text-rust tracking-wide">Thank You</p>
                    <p className="text-stone text-sm font-sans">You have been added to the list.</p>
                </div>
            ) : (
                <form className="flex flex-col gap-4 pt-4" onSubmit={handleNewsletterSubmit}>
                    {/* Web3Forms Config */}
                    <input type="hidden" name="access_key" value="361b8626-f974-415a-b9f4-bc0871537fec" />
                    <input type="hidden" name="subject" value="New Newsletter Subscriber" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <input type="hidden" name="message" value="Newsletter Signup Request" />

                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        required
                        className="w-full bg-transparent border-b border-charcoal/20 text-center py-3 text-charcoal focus:outline-none focus:border-rust transition-colors placeholder:text-stone/30 text-lg font-sans font-light"
                    />
                    <button 
                        type="submit" 
                        disabled={isNewsletterSubmitting}
                        className="text-stone/50 hover:text-rust font-sans text-xs uppercase tracking-[0.2em] py-4 transition-colors w-full mt-2 disabled:opacity-50"
                    >
                        {isNewsletterSubmitting ? 'Joining...' : 'Join List'}
                    </button>
                </form>
            )}
         </div>
      </section>

    </div>
  );
};

export default Home;