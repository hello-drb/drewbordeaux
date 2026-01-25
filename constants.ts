import { Show, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Music', path: '/music' },
  { label: 'Live', path: '/live' },
  { label: 'Bio', path: '/bio' },
  { label: 'Production', path: '/producer' },
  { label: 'Contact', path: '/contact' },
];

export const UPCOMING_SHOWS: Show[] = [
  {
    id: '1',
    date: 'MAR 22',
    venue: 'Private Event',
    city: 'Wanaque, NJ',
    time: '7:00 PM',
    // ticketLink removed as per request for unticketed events
  },
  {
    id: '2',
    date: 'APR 17',
    venue: 'Towne Crier Cafe',
    city: 'Beacon, NY',
    time: '6:30 PM',
    guests: ['Becki Davis'],
    // ticketLink removed as per request for unticketed events
  }
];

export const CONTACT_EMAIL = "booking@drewbordeaux.com";
export const PRESS_EMAIL = "press@drewbordeaux.com";
export const GENERAL_EMAIL = "hello@drewbordeaux.com";