import React from 'react';
import RMDBLogo from '../../assets/img/react-movie-logo.svg'
import TMBDLogo from '../../assets/img/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';



const Header = () => (
  <Wrapper>
    <Content>

      <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      <TMDBLogoImg src={TMBDLogo} alt='tmb-logo' />

    </Content>
  </Wrapper>
);

export default Header;