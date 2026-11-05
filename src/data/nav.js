// The main menu. `children` appear in a dropdown under their parent.
// Pages not listed here (/isme2024, /videos, /embodiedunderground, /on-emp) stay out of the menu on purpose.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'Lectures', href: '/lectures' },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'Powerpoint', href: '/presentations' },
      { label: 'Photos', href: '/photos' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
