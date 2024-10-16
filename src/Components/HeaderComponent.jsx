
import React from 'react';

const HeaderComponent = ({ isAboutPage }) => {
  return (
    <div>
      <h3 style={{ color: isAboutPage ? 'blue' : 'black' }}>
        {isAboutPage ? 'About Page Header' : 'Home Page Header'}
      </h3>
      <p>This is a shared component used on multiple pages.</p>
    </div>
  );
};

export default HeaderComponent;
