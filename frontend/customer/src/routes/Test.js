import React from 'react';
import { useParams } from 'react-router';

const Test = () => {
  const params = useParams();

  console.log(params);
};

export default Test;
