import React from 'react';
import { useShows } from '../hooks/useShows';
import Button from '../components/Button';

const Live: React.FC = () => {
  const { shows, loading } = useShows();

  return (
    <div className="max-w-6xl mx-auto space-y-24 animate-enter mb-20 px-6">
      
      <header className="space-y-6 text-center pt-12 md:pt-20">
        <span className="text-spruce text-xs uppercase tracking-[0.3em] font-bold">On Tour</span>
        <h1 className="text-6xl md:text-9xl font-display uppercase font-bold text-ink tracking-wide">Live</h1>
      </header>

      {/* Shows List */}
      <section>
        <div className="w-full min-h-[300px]">
            {loading && (
                <div className="text-center py-20 text-stone/50 animate-pulse text-xs tracking-widest uppercase font-bold">
                    Loading dates...
                </div>
            )}
            
            {!loading && shows.length === 0 && (
                <div className="text-center py-20 border-t border-ink/10">
                    <p className="text-xl text-stone font-serif italic mb-4">No upcoming shows listed.</p>
                    <p className="text-stone/50 text-sm">Join the mailing list for announcements.</p>
                </div>
            )}

            {!loading && shows.map((show) => (
                <div key={show.id} className="group border-t border-ink/10 hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300 rounded-lg -mx-4 px-4">
                    <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6">
                        
                        {/* Date */}
                        <div className="md:w-48 shrink-0">
                            <span className="text-3xl font-display uppercase text-spruce">{show.date}</span>
                            {show.time && (
                              <div className="text-stone/60 text-xs mt-1 uppercase tracking-wider font-bold">{show.time}</div>
                            )}
                        </div>

                        {/* Venue & City */}
                        <div className="grow flex flex-col justify-center gap-1">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                                <h3 className="text-2xl font-display uppercase text-ink group-hover:translate-x-1 transition-transform duration-300">
                                    {show.venue}
                                </h3>
                                {show.guests && (
                                    <span className="text-stone text-[10px] uppercase tracking-widest font-bold self-start md:self-auto mt-1 md:mt-0 bg-stone/10 px-2 py-1 rounded">
                                        w/ {show.guests.join(', ')}
                                    </span>
                                )}
                            </div>
                            <span className="text-stone font-medium uppercase tracking-widest text-sm font-sans">
                                {show.city}
                            </span>
                        </div>

                        {/* Action */}
                        <div className="md:w-40 shrink-0 flex justify-end mt-4 md:mt-0">
                             {show.ticketLink && (
                               <Button 
                                  href={show.ticketLink} 
                                  variant="outline" 
                                  className="w-full md:w-auto text-xs py-3 px-6 border-ink/20 hover:bg-spruce hover:border-spruce hover:text-white text-ink font-bold"
                               >
                                  Tickets
                               </Button>
                             )}
                        </div>
                    </div>
                </div>
            ))}
            {!loading && shows.length > 0 && <div className="border-t border-ink/10" />}
        </div>
      </section>

      {/* Booking Footer */}
      <section className="grid md:grid-cols-2 gap-12 border border-ink/10 p-12 md:p-16 bg-sand/30 rounded-lg">
        <div className="space-y-4">
            <h3 className="text-3xl font-display uppercase font-bold text-ink">Booking</h3>
            <p className="text-stone font-medium max-w-sm font-sans">
                Available for festivals, private events, and venue dates worldwide.
            </p>
        </div>
        <div className="flex flex-col justify-center items-start md:items-end">
            <Button 
                to="/contact" 
                variant="primary"
                className="bg-ink text-white hover:bg-spruce shadow-md"
            >
                Inquire for Booking
            </Button>
        </div>
      </section>

    </div>
  );
};

export default Live;