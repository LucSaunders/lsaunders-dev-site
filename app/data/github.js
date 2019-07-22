import dayjs from 'dayjs';

/* Keys returned by the github api. These are the keys the github api query searches for.
 */
export const githubKeys = ['repos', 'pushed_at'];

// TODO: To be provided by an API
const data = [
  {
    label: 'GitHub repositories',
    key: 'repos',
    value: '30+',
    link: 'https://github.com/LucSaunders?tab=repositories'
  },
  {
    label: 'Commits this year',
    value: '350+'
  },
  {
    label: 'Projects deployed',
    key: 'deployedProjects',
    value: '5',
    link: 'https://github.com/lucsaunders'
  },
  {
    label: 'This site last updated on',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/lucsaunders/lsaunders-dev-site'
  }
];

export default data;
