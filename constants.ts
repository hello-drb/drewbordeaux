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
    date: 'OCT 1',
    venue: 'Songs and Stories',
    city: 'Bedford, NY',
    time: '7:00 PM',
  }
];

export const CONTACT_EMAIL = "booking@drewbordeaux.com";
export const PRESS_EMAIL = "press@drewbordeaux.com";
export const GENERAL_EMAIL = "hello@drewbordeaux.com";
