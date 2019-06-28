import React, { Fragment, useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  return (
    <Fragment>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map(key => data[key])} />
    </Fragment>
  );
};

export default PersonalStats;
