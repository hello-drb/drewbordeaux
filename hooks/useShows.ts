import { useState, useEffect } from 'react';
import { Show } from '../types';
import { UPCOMING_SHOWS } from '../constants';

const ARTIST_NAME = "Drew Bordeaux"; 
const APP_ID = "drew-bordeaux-website"; // Public app_id for BIT API

export const useShows = () => {
  // Initialize with manual list from constants as fallback/initial state
  const [shows, setShows] = useState<Show[]>(UPCOMING_SHOWS);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const artistEncoded = encodeURIComponent(ARTIST_NAME);
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${artistEncoded}/events?app_id=${APP_ID}&date=upcoming`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch shows');
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const transformedShows: Show[] = data.map((event: any) => {
            const dateObj = new Date(event.datetime);
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase();
            
            // Extract time
            const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

            const guests = event.lineup.filter((name: string) => 
                name.toLowerCase() !== ARTIST_NAME.toLowerCase()
            );

            return {
              id: event.id,
              date: dateStr,
              venue: event.venue.name,
              city: `${event.venue.city}, ${event.venue.region || event.venue.country}`,
              time: timeStr,
              ticketLink: event.offers?.[0]?.url || event.url,
              guests: guests.length > 0 ? guests : undefined
            };
          });
          setShows(transformedShows);
        } else {
            console.log("No shows found on Bandsintown, using fallback list.");
        }
      } catch (err) {
        console.warn("Could not fetch Bandsintown data, falling back to manual list.", err);
        setError("Could not load new dates.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return { shows, loading, error };
};