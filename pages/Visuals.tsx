import React from 'react';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';
import { IMAGES } from '../images';

const Visuals: React.FC = () => {
  return (
    <div className="flex flex-col items-center animate-enter mb-20">
      
      {/* Header Section */}
      <section className="max-w-5xl w-full px-6 pt-24 pb-12 md:py-32 text-center md:text-left">
        <span className="text-stone text-xs uppercase tracking-[0.25em] font-bold block mb-6">DrewImages</span>
        <h1 className="text-5xl md:text-8xl font-display uppercase font-bold text-ink mb-8 tracking-wide">Visual Identity</h1>
        <p className="text-lg md:text-2xl text-stone font-light leading-relaxed max-w-2xl md:border-l-4 border-stone/20 md:pl-8 mx-auto md:mx-0 font-sans">
           Translating sonic worlds into visual ones. A dedicated branding practice for artists.
        </p>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-6xl mx-auto" />

      {/* Main Content Grid */}
      <section className="max-w-5xl w-full px-6 py-20 md:py-32 grid md:grid-cols-[1fr_300px] gap-16 md:gap-32">
        
        {/* Left Column */}
        <div className="space-y-24">
            
            {/* The Practice */}
            <div className="space-y-6">
                <h3 className="text-spruce font-display text-3xl uppercase tracking-wide">The Practice</h3>
                <div className="prose prose-stone prose-lg prose-p:font-sans prose-p:font-light prose-p:leading-loose">
                  <p>
                    Drew runs <a href="https://drewimages.studio" target="_blank" rel="noreferrer" className="text-ink hover:text-spruce transition-colors border-b-2 border-ink/20 pb-0.5 font-bold no-underline">DrewImages</a>, creating photography, video, and visual identity systems. 
                    The goal is cohesion: ensuring the visual presentation of an artist resonates as deeply as their music.
                  </p>
                </div>
            </div>

            {/* Featured Image */}
             <div className="w-full bg-sand/20 aspect-[16/9] flex items-center justify-center relative overflow-hidden group shadow-xl rounded-sm">
                <img 
                    src={IMAGES.VISUALS_PORTFOLIO_EXAMPLE}
                    alt="Photography Portfolio Example" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                />
             </div>

            {/* Recognition */}
            <div className="space-y-10">
                <h3 className="text-spruce font-display text-3xl uppercase tracking-wide">Recognition</h3>
                
                <div className="pl-8 border-l-2 border-ink/10 hover:border-spruce transition-colors duration-500">
                    <p className="text-stone font-medium leading-relaxed mb-8 max-w-lg font-sans">
                        Work has appeared in major publications and served Grammy-winning talent.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                         <div className="flex items-center gap-3 text-sm text-ink font-bold font-sans">
                            <span className="w-2 h-2 rounded-full bg-stone block shrink-0" />
                             <span>Featured in <em>Vogue</em>, <em>Billboard</em>, and <em>DownBeat</em></span>
                         </div>
                         <div className="flex items-center gap-3 text-sm text-ink font-bold font-sans">
                            <span className="w-2 h-2 rounded-full bg-stone block shrink-0" />
                             <span>Clients include Jazzmeia Horn, Cyrille Aimée, and Nicole Zuraitis</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="md:pt-2">
            <div className="bg-white border border-ink/10 p-8 sticky top-32 space-y-8 shadow-sm rounded-lg">
                <div>
                    <h3 className="text-ink text-xl font-display uppercase mb-3">Visit Studio</h3>
                    <div className="w-8 h-px bg-stone mb-6"></div>
                    <p className="text-stone text-sm leading-relaxed mb-8 font-sans font-medium">
                        View the full portfolio and detailed case studies at the dedicated studio site.
                    </p>
                    <Button href="https://drewimages.studio" variant="secondary" className="w-full text-xs py-3 gap-2">
                        DrewImages.Studio <ExternalLink size={14} />
                    </Button>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-ink/10">
                   <h4 className="text-[10px] uppercase tracking-widest text-stone/40 font-bold font-sans">Disciplines</h4>
                   <ul className="text-stone text-sm space-y-3 font-medium font-sans">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Photography</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Music Video</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Art Direction</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone/30 rounded-full"/> Brand Identity</li>
                   </ul>
                </div>
            </div>
        </div>

      </section>

    </div>
  );
};

export default Visuals;