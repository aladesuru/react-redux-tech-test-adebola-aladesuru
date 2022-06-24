import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <p className="pageNotfound"> Sorry page not found ! </p>
      <Link to="/" className="view-all">
        Back to view all
      </Link>
    </div>
  );
};

export default PageNotFound;
