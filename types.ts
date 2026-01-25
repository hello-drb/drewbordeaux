export interface Show {
  id: string;
  date: string;
  venue: string;
  city: string;
  time?: string; // Optional: Show time (e.g. "7:00 PM")
  ticketLink?: string; // Optional: if sold out or door only
  guests?: string[]; // Optional: list of other artists on the bill
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name placeholder
}