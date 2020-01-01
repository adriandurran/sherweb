import React from 'react';

const DetailedMain = ({ detail }) => {
  console.log(detail);
  return <div>Main details {detail.id_str}</div>;
};

export default DetailedMain;
