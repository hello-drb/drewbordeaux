import React from 'react';
import Button from '../components/Button';
import { CONTACT_EMAIL } from '../constants';
import { IMAGES } from '../images';
import { ChevronDown } from 'lucide-react';

const Producer: React.FC = () => {
  return (
    <div className="flex flex-col items-center animate-enter mb-20">
      
      {/* Header Section */}
      <section className="max-w-5xl w-full px-6 pt-24 pb-12 md:py-32 text-center md:text-left">
        <span className="text-spruce text-xs uppercase tracking-[0.25em] font-bold block mb-6">Studio</span>
        <h1 className="text-5xl md:text-8xl font-display uppercase font-bold text-ink mb-8 tracking-wide">Production</h1>
        <p className="text-lg md:text-2xl text-stone font-light leading-relaxed max-w-2xl md:border-l-4 border-spruce/20 md:pl-8 mx-auto md:mx-0 font-sans">
           Helping artists make cohesive records—where songs, performances, and arrangements live in the same world.
        </p>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-6xl mx-auto" />

      {/* Main Content Grid */}
      <section className="max-w-5xl w-full px-6 py-20 md:py-32 grid md:grid-cols-[1fr_300px] gap-16 md:gap-32">
        
        {/* Left Column */}
        <div className="space-y-24">
            
            {/* Philosophy */}
            <div className="space-y-6">
                <h3 className="text-spruce font-display text-3xl uppercase tracking-wide">Philosophy</h3>
                <div className="prose prose-stone prose-lg prose-p:font-sans prose-p:font-light prose-p:text-base prose-p:leading-loose">
                  <p>
                    Drew brings the same approach to music production as creative direction: treating each project as worldbuilding. The work starts by paying close attention to the influences, moods, and ideas already present in a song, then shaping the record around them to create a cohesive, immersive experience.
                  </p>
                  <p>
                    The aim is to carry the heart of a project all the way through—so it lands with weight and clarity on stage, through headphones, and across the broader artistic world surrounding the music. That way of working often extends into the visual identity supporting the record as well. More on that can be found at <a href="https://drewimages.studio" target="_blank" rel="noreferrer" className="text-ink font-bold hover:text-spruce transition-colors">drewimages.studio</a>.
                  </p>
                </div>
            </div>

            {/* Featured Work */}
            <div className="space-y-10">
                <h3 className="text-spruce font-display text-3xl uppercase tracking-wide">Spotlight</h3>
                
                <div className="group relative pl-8 border-l-2 border-ink/10 hover:border-spruce transition-colors duration-500">
                    
                    {/* Image Block */}
                    <div className="mb-8 relative aspect-square overflow-hidden bg-sand/20 shadow-xl rounded-sm">
                        <img 
                            src={IMAGES.PRODUCTION_LOST_AND_FOUND} 
                            alt="Becki Davis - Lost & Found" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                    </div>

                    <div className="space-y-1 mb-6">
                        <h4 className="text-ink text-2xl font-display uppercase tracking-wide">Becki Davis — <span className="text-stone">Lost & Found</span></h4>
                        <span className="text-stone/40 font-sans text-sm block">(2025)</span>
                        <span className="text-[10px] text-spruce uppercase tracking-widest font-bold block pt-2">Full Production / Mixing</span>
                    </div>
                    
                    <p className="text-stone font-sans font-light leading-relaxed mb-6 max-w-lg">
                        This debut solo album received strong support from the Folk community and was featured on WVPE 88.1 FM’s <em>Best of 2025 Show</em> as one of the station’s Top 30 Albums of the Year.
                    </p>

                    <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-sm text-ink font-bold font-sans">
                            <span className="w-2 h-2 rounded-full bg-spruce block shrink-0" />
                             <span>#7 Folk Alliance International Top Albums</span>
                         </li>
                         <li className="flex items-center gap-3 text-sm text-ink font-bold font-sans">
                            <span className="w-2 h-2 rounded-full bg-spruce block shrink-0" />
                             <span>#11 Top Artists Chart</span>
                         </li>
                    </ul>
                </div>
            </div>

        </div>

        {/* Right Column: Sidebar */}
        <div className="md:pt-2">
            <div className="bg-white border border-ink/10 p-8 sticky top-32 space-y-8 shadow-sm rounded-lg">
                <div>
                    <h3 className="text-ink text-xl font-display uppercase mb-3">Work with Drew</h3>
                    <div className="w-8 h-px bg-spruce mb-6"></div>
                    <p className="text-stone text-sm leading-relaxed mb-8 font-sans font-medium">
                        Available for remote mixing, full production, and arrangement consultation.
                    </p>
                    <Button href="#contact-form" variant="outline" className="w-full text-xs py-3 border-ink/20 hover:bg-spruce hover:border-spruce hover:text-white !text-ink">
                        Start a Project
                    </Button>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-ink/10">
                   <h4 className="text-[10px] uppercase tracking-widest text-stone/40 font-bold font-sans">Services</h4>
                   <ul className="text-stone text-sm space-y-3 font-sans font-medium">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Full Production</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Mixing</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Arrangement</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Vocal Production</li>
                   </ul>
                </div>
            </div>
        </div>

      </section>

      {/* Discography */}
      <section className="w-full border-t border-ink/10 bg-sand/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h3 className="text-spruce font-display text-3xl uppercase tracking-wide mb-12">Selected Production Discography</h3>
                 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Item 1 */}
                <div className="group cursor-pointer">
                    <div className="aspect-square bg-white overflow-hidden mb-4 relative shadow-md">
                        <img 
                            src={IMAGES.PRODUCTION_DISC_1} 
                            alt="Halo (Remix)" 
                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-1">
                        <div className="text-ink text-lg font-bold font-sans leading-tight group-hover:text-spruce transition-colors">Halo (Remix)</div>
                        <div className="text-stone/60 text-xs uppercase tracking-wide font-bold font-sans">Vanessa Silberman</div>
                    </div>
                </div>

                {/* Item 2: Some Kind of Way (Swapped) */}
                <div className="group cursor-pointer">
                    <div className="aspect-square bg-white overflow-hidden mb-4 relative shadow-md">
                        <img 
                            src={IMAGES.PRODUCTION_DISC_3} 
                            alt="Some Kind of Way" 
                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-1">
                        <div className="text-ink text-lg font-bold font-sans leading-tight group-hover:text-spruce transition-colors">Some Kind of Way</div>
                        <div className="text-stone/60 text-xs uppercase tracking-wide font-bold font-sans">Pam Hervey</div>
                    </div>
                </div>

                {/* Item 3: July (Swapped) */}
                <div className="group cursor-pointer">
                    <div className="aspect-square bg-white overflow-hidden mb-4 relative shadow-md">
                        <img 
                            src={IMAGES.PRODUCTION_DISC_2} 
                            alt="July" 
                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-1">
                        <div className="text-ink text-lg font-bold font-sans leading-tight group-hover:text-spruce transition-colors">July</div>
                        <div className="text-stone/60 text-xs uppercase tracking-wide font-bold font-sans">Becki Davis</div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="group cursor-pointer">
                    <div className="aspect-square bg-white overflow-hidden mb-4 relative shadow-md">
                        <img 
                            src={IMAGES.PRODUCTION_DISC_4} 
                            alt="Uninvited" 
                            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-1">
                        <div className="text-ink text-lg font-bold font-sans leading-tight group-hover:text-spruce transition-colors">Uninvited</div>
                        <div className="text-stone/60 text-xs uppercase tracking-wide font-bold font-sans">LydMarie</div>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="w-full border-t border-ink/10 bg-charcoal py-24">
          <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16 space-y-4">
                  <h3 className="text-spruce text-xs uppercase tracking-[0.3em] font-bold">Contact</h3>
                  <h2 className="text-4xl md:text-5xl font-display uppercase text-white tracking-wide">Start a Project</h2>
                  <p className="text-stone font-medium font-sans">Tell me about your music.</p>
              </div>

              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                  <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-2 group">
                          <label className="text-xs uppercase tracking-widest text-stone/50 font-bold group-focus-within:text-spruce transition-colors font-sans">Name</label>
                          <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg font-bold" placeholder="Jane Doe" required />
                      </div>
                      <div className="space-y-2 group">
                          <label className="text-xs uppercase tracking-widest text-stone/50 font-bold group-focus-within:text-spruce transition-colors font-sans">Email</label>
                          <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg font-bold" placeholder="jane@example.com" required />
                      </div>
                  </div>
                  
                  <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest text-stone/50 font-bold group-focus-within:text-spruce transition-colors font-sans">Project Type</label>
                      <div className="relative">
                          <select className="w-full bg-transparent border-b border-white/20 py-2 pr-8 text-white focus:outline-none focus:border-spruce transition-colors font-sans text-lg font-bold appearance-none cursor-pointer rounded-none">
                              <option className="bg-charcoal text-stone">Full Production</option>
                              <option className="bg-charcoal text-stone">Mixing</option>
                              <option className="bg-charcoal text-stone">Arrangement</option>
                              <option className="bg-charcoal text-stone">Other</option>
                          </select>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone/50 group-focus-within:text-spruce transition-colors">
                            <ChevronDown size={16} />
                          </div>
                      </div>
                  </div>

                  <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest text-stone/50 font-bold group-focus-within:text-spruce transition-colors font-sans">Message</label>
                      <textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg font-bold min-h-[100px] resize-none" placeholder="Tell me about your demo..." required></textarea>
                  </div>

                  <div className="pt-8 text-center">
                      <Button className="px-12 py-4 text-xs shadow-md">Send Message</Button>
                  </div>
              </form>
          </div>
      </section>

    </div>
  );
};

export default Producer;