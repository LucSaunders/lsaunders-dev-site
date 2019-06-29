const randomString = length => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Luc Saunders',
    heading: 'ABOUT THIS SITE'
  },
  {
    route: '/about',
    title: 'About | Luc Saunders',
    heading: 'ABOUT ME'
  },
  {
    route: '/projects',
    title: 'Projects | Luc Saunders',
    heading: 'PROJECTS'
  },
  {
    route: '/stats',
    title: 'Stats | Luc Saunders',
    heading: 'STATS'
  },
  {
    route: '/contact',
    title: 'Contact | Luc Saunders',
    heading: 'CONTACT'
  }
];

export { pages, randomString };
