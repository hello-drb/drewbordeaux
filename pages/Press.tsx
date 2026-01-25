import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRESS_EMAIL } from '../constants';

const Press: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 animate-enter">
      
      <header className="mb-20 text-center md:text-left">
        <span className="text-spruce text-xs uppercase tracking-[0.3em] font-medium block mb-4">Coverage</span>
        <h1 className="text-5xl md:text-7xl font-display uppercase font-bold text-ink">Press</h1>
      </header>

      {/* Articles List */}
      <section className="space-y-12 border-t border-ink/10 pt-12 mb-20">
        
        {/* Article 1 */}
        <a 
          href="https://www.theinsidepress.com/flourishing-despite-covid-musician-consummate-artist-drew-bordeaux/" 
          target="_blank" 
          rel="noreferrer"
          className="group block"
        >
            <div className="flex flex-col md:flex-row gap-2 md:items-baseline justify-between mb-2">
                <h3 className="text-2xl md:text-3xl font-display uppercase text-ink group-hover:text-spruce transition-colors">
                    The Inside Press
                </h3>
                <span className="text-stone/40 text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:text-stone/60">
                    Read Feature <ArrowUpRight className="w-3 h-3" />
                </span>
            </div>
            <p className="text-stone font-light font-sans text-lg leading-relaxed max-w-2xl group-hover:text-stone/80 transition-colors">
                "Flourishing Despite COVID: Musician & Consummate Artist Drew Bordeaux"
            </p>
        </a>

        <div className="h-px bg-ink/5 w-full" />

        {/* Article 2 */}
        <a 
          href="https://thehudsonindependent.com/tarrytown-musician-lets-his-impulse-instinct-lead-the-way/" 
          target="_blank" 
          rel="noreferrer"
          className="group block"
        >
            <div className="flex flex-col md:flex-row gap-2 md:items-baseline justify-between mb-2">
                <h3 className="text-2xl md:text-3xl font-display uppercase text-ink group-hover:text-spruce transition-colors">
                    The Hudson Independent
                </h3>
                <span className="text-stone/40 text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:text-stone/60">
                    Read Feature <ArrowUpRight className="w-3 h-3" />
                </span>
            </div>
            <p className="text-stone font-light font-sans text-lg leading-relaxed max-w-2xl group-hover:text-stone/80 transition-colors">
                "Tarrytown Musician Lets His ‘Impulse / Instinct’ Lead the Way"
            </p>
        </a>

      </section>

      {/* Contact */}
      <section className="border-t border-ink/10 pt-16">
        <div className="space-y-6 max-w-md">
            <h4 className="text-xs uppercase tracking-widest text-stone/40">Contact</h4>
            <div className="space-y-2">
                <p className="text-stone/60 text-sm font-sans">
                    For interviews, review copies, and assets, please contact:
                </p>
                <a href={`mailto:${PRESS_EMAIL}`} className="text-xl md:text-2xl text-spruce hover:text-ink transition-colors font-display uppercase italic block pt-2">
                    {PRESS_EMAIL}
                </a>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Press;