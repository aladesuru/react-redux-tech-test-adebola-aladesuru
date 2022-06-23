import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="pageNotfound">
      <p> Sorry page not found ! </p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
