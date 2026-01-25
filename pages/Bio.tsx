import React from 'react';
import { IMAGES } from '../images';

const Bio: React.FC = () => {
  return (
    <div className="flex flex-col mb-20">
      
      {/* Header */}
      <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 border-b border-ink/10 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
            <img 
                src={IMAGES.HERO_BACKGROUND} 
                alt="Background texture" 
                className="w-full h-full object-cover opacity-20 grayscale"
            />
        </div>

        {/* Text Content */}
        <div className="relative z-10 space-y-6 animate-enter">
            <span className="text-spruce text-xs uppercase tracking-[0.3em] font-bold block">Bio</span>
            <h1 className="text-5xl md:text-8xl font-display uppercase font-bold text-ink tracking-wide">
                About Drew
            </h1>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <article className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:font-bold prose-headings:text-ink prose-p:font-sans prose-p:font-light prose-p:text-base prose-p:leading-relaxed prose-a:text-spruce prose-a:no-underline hover:prose-a:text-ink transition-colors">
            
            <p className="lead text-ink text-xl md:text-2xl font-serif italic mb-12 opacity-90 border-l-4 border-spruce pl-6">
                "It’s not just about the song. It’s about the world it lives in."
            </p>

            <p>
                For New York–based artist Drew Bordeaux, that world starts with the song—then expands outward. A classically trained violinist since the age of 5, his evolution from the conservatory to the club birthed a distinct sonic signature: an electric violin style that channels the grit and spirit of Jimi Hendrix, paired with a percussive acoustic guitar approach.
            </p>

            <p>
                This blend of orchestral discipline and rhythmic drive defines his sound—merging the vocal directness of Richie Havens with the songcraft of David Gray to create something both intimate and anthemically vast.
            </p>

            <p>
                Bordeaux has spent years refining that voice on stages across the Northeast. He has shared bills with artists including <strong>Daughtry</strong> and <strong>Gin Blossoms</strong>, with opening slots at venues such as The Paramount (Huntington) and Tarrytown Music Hall.
            </p>

            <h2 className="text-3xl text-ink mt-16 mb-8">The Producer & Creative Director</h2>

            <p>
                That same focus carries into the studio. As a producer, Bordeaux helps artists make cohesive records—songs, performances, and arrangements that live in the same world. He produced Becki Davis’s debut <em>Lost & Found</em> (2025), which reached #7 on the Folk Alliance International Top Albums Chart and #11 on the Top Artists Chart.
            </p>

            <p>
                He also runs <a href="https://drewimages.studio" target="_blank" rel="noreferrer">DrewImages</a>, a visual branding practice creating photography, video, and visual identity for musicians. His work has appeared in <em>Vogue</em>, <em>Billboard</em>, and <em>DownBeat</em>, and includes collaborations with Grammy-winning and nominated artists such as Jazzmeia Horn, Nicole Zuraitis, and Cyrille Aimée.
            </p>

            <h2 className="text-3xl text-ink mt-16 mb-8">Impulse / Instinct</h2>
            
            <p>
                In 2021, he released <em>Impulse / Instinct</em>, a self-produced debut that established his recorded voice. The album spans intimate songs and bigger, outward-facing ones—“Alkaline” at the emotional center, “Last Son” capturing the moment it was written in—and includes a bold reworking of Genesis’s “Land of Confusion.”
            </p>

            <p className="mt-12 pt-12 border-t border-ink/10 text-ink font-bold">
                A new album, <strong>Dust Between Galaxies</strong>, is currently in progress. Arriving Spring 2026.
            </p>
        </article>
      </section>

    </div>
  );
};

export default Bio;