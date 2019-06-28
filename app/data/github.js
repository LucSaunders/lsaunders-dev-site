import dayjs from 'dayjs';

/* Keys returned by the github api. The other keys in the array below
 * are mostly jokes. These are the keys the github api query searches for.
 */
export const githubKeys = ['repos', 'pushed_at'];

// TODO To be provided by an API
const data = [
  {
    label: 'Number of GitHub repositories',
    key: 'repos',
    value: '30+',
    link: 'https://github.com/lucsaunders/personal-site/network'
  },
  {
    label: 'Number of commits this year',
    value: '250+'
  },
  {
    label: 'Number of projects deployed',
    key: 'deployedProjects',
    value: '5',
    link: 'https://github.com/lucsaunders/personal-site/network'
  },
  {
    label: 'This site last updated on',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/lucsaunders/personal-site/commits'
  }
];

export default data;
