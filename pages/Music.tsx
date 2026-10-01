import React from 'react';
import Button from '../components/Button';
import { IMAGES } from '../images';

const Music: React.FC = () => {
  return (
    <div className="space-y-32 mb-20">
      
      <header className="text-center space-y-6 pt-12 md:pt-20 px-6">
        <span className="text-spruce text-xs uppercase tracking-[0.3em] font-bold">Discography</span>
        <h1 className="text-6xl md:text-9xl font-display uppercase font-bold text-ink tracking-wide">Music</h1>
      </header>

      {/* Hero Release - Impulse / Instinct */}
      <section className="max-w-7xl mx-auto px-6">
        {/* Changed aspect ratio on mobile to min-h to prevent text cutoff */}
        <div className="relative min-h-[600px] md:min-h-0 md:aspect-[21/9] w-full overflow-hidden group shadow-xl rounded-sm">
            <img 
               src={IMAGES.IMPULSE_INSTINCT_LANDSCAPE}
               alt="Impulse / Instinct Landscape" 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-20 max-w-2xl">
                <h2 className="text-5xl md:text-8xl font-display uppercase font-bold text-white mb-8 drop-shadow-lg tracking-wide">Impulse / <br /> Instinct</h2>
                <div className="flex flex-wrap gap-4">
                    {/* Fixed Button Colors: White background, Black text */}
                    <Button href="https://open.spotify.com/artist/3FoGO6FW2T3cffSg7SSjaW" variant="primary" className="!bg-white !text-black !border-white hover:!bg-rust hover:!border-rust hover:!text-white shadow-lg">
                        Listen on Spotify
                    </Button>
                    <Button href="https://music.apple.com/us/album/impulse-instinct/1568047199" variant="outline" className="backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-ink hover:border-white">
                        Apple Music
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Album Detail / Story (Impulse) */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 px-6">
        <div className="space-y-10 border-t border-ink/10 pt-8">
            <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-stone font-bold">Release</h3>
                <p className="text-3xl font-display uppercase font-bold text-ink">2021</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-stone font-bold">Credits</h3>
                <p className="text-ink text-sm leading-relaxed font-medium font-sans">
                    Produced by Drew Bordeaux.<br />
                    Mixed & Mastered by Ryan Gilligan.
                </p>
            </div>
        </div>

        <div className="prose prose-stone prose-lg text-stone font-medium font-sans">
             <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-spruce first-letter:float-left first-letter:mr-3 leading-loose">
                A self-produced debut that establishes a distinct recorded voice. The record spans intimate songs and bigger, outward-facing ones, with “Alkaline” at its emotional center and “Last Son” reflecting the moment the songs were written in.
             </p>
             <p className="leading-loose">
                The album also includes a bold reworking of Genesis’s “Land of Confusion,” transforming the pop-rock classic into a prescient and anthemic protest song.
             </p>

             {/* Apple Music Embed */}
             <div className="mt-12 not-prose w-full flex justify-center">
                <iframe 
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                  frameBorder="0" 
                  height="450" 
                  style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '12px', backgroundColor: 'transparent' }} 
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                  src="https://embed.music.apple.com/us/album/impulse-instinct/1568047199">
                </iframe>
             </div>
        </div>
      </section>

      {/* Dust Between Galaxies - Feature Section */}
      <section className="relative w-full py-32 md:py-40 overflow-hidden text-white mt-12">
         {/* Background Texture */}
         <div className="absolute inset-0 z-0">
             <img 
               src={IMAGES.DUST_TEXTURE}
               alt="Dust Between Galaxies Texture" 
               className="w-full h-full object-cover"
             />
             {/* Overlays for readability and mood */}
             <div className="absolute inset-0 bg-charcoal/90 mix-blend-multiply" />
             <div className="absolute inset-0 bg-black/40" />
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Left: Album Art */}
            {/* Removed ordering classes so default DOM order (Image first) applies on mobile, giving us Image on Top */}
            <div className="relative group perspective-1000">
                 <div className="absolute -inset-4 bg-rust/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <img 
                    src={IMAGES.DUST_BETWEEN_GALAXIES_COVER} 
                    alt="Dust Between Galaxies" 
                    className="relative z-10 w-full max-w-lg mx-auto md:ml-0 shadow-2xl rounded-sm border border-white/10 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
                 />
            </div>

            {/* Right: Text Content */}
            <div className="space-y-10">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-rust text-xs uppercase tracking-[0.3em] font-bold">Out Now</span>
                    <div className="h-px bg-rust w-12"></div>
                </div>

                <h2 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-wide leading-none text-paper">
                    Dust Between <br/> Galaxies
                </h2>

                <div className="text-lg md:text-xl text-white/80 font-light font-sans leading-relaxed space-y-6">
                    <p>
                        A rock record written equally for loud NYC clubs and headphone moments. 
                        <em className="text-white not-italic font-bold"> Dust Between Galaxies</em> leans gritty and immediate, with swirling guitars, heavyweight drums, 
                        and melodies built to carry both tension and release.
                    </p>
                    <p>
                        The album captures a formative chapter—ambition, friction, and momentum—presented as a cohesive statement 
                        that honors the original energy while landing firmly in the present.
                    </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-rust font-bold mb-4">Tracks Include</p>
                    <ul className="text-lg md:text-xl font-display italic text-paper/80 space-y-2">
                        <li>“The Fallout”</li>
                        <li>“Chasing A Sunset”</li>
                        <li>“Restless Heart”</li>
                    </ul>
                </div>

                <div className="pt-8">
                     <div className="flex flex-wrap gap-4">
                        <Button href="https://open.spotify.com/album/1v9uoONPLuYwcpbAq6WFGn" variant="primary">
                           Listen on Spotify
                        </Button>
                        <Button href="https://music.apple.com/us/album/dust-between-galaxies/6786445061" variant="outline" className="border-white/20 hover:bg-rust hover:border-rust text-white font-bold">
                           Apple Music
                        </Button>
                     </div>
                </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default Music;
