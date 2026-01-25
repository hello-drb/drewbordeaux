import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 animate-enter">
      <h1 className="text-4xl font-serif font-bold mb-4 text-ink">Design Style Guide</h1>
      <p className="mb-16 text-stone text-lg">Comparing fonts and colors for a "Modern Americana Rock" aesthetic.</p>

      {/* ==================== COLOR PALETTES ==================== */}
      <h2 className="text-2xl font-serif font-bold text-spruce mb-12 border-b border-ink/10 pb-4">Professional Palette</h2>
      
      {/* Palette: Earthy Professional */}
      <div className="mb-16">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-6 font-sans text-ink">Current System</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
                <div className="h-24 w-full rounded shadow-md border border-ink/10" style={{ backgroundColor: '#E5D8C8' }}></div>
                <p className="text-xs font-mono uppercase text-stone">Paper (Main BG)</p>
            </div>
            <div className="space-y-2">
                <div className="h-24 w-full rounded shadow-md" style={{ backgroundColor: '#23201D' }}></div>
                <p className="text-xs font-mono uppercase text-stone">Charcoal (Dark BG)</p>
            </div>
            <div className="space-y-2">
                <div className="h-24 w-full rounded shadow-md" style={{ backgroundColor: '#181615' }}></div>
                <p className="text-xs font-mono uppercase text-stone">Ink (Main Text)</p>
            </div>
             <div className="space-y-2">
                <div className="h-24 w-full rounded shadow-md" style={{ backgroundColor: '#9F3E24' }}></div>
                <p className="text-xs font-mono uppercase text-stone">Rust (Accent)</p>
            </div>
            <div className="space-y-2">
                <div className="h-24 w-full rounded shadow-md" style={{ backgroundColor: '#2F4A42' }}></div>
                <p className="text-xs font-mono uppercase text-stone">Spruce (Green)</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default StyleGuide;