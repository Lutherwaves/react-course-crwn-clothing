import React from 'react';

import Directory from '../../components/directory/directory.component';

// import './homepage.styles.scss'; USING REGULAR SCSS
import { HomePageContainer } from './homepage.styles'; // USING STYLED COMPONENTS

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
