import React from 'react';
import { Link } from 'react-router-dom';

import './assets/css/menu.css';
import { displayCamXLogo, displayA4LogoNav } from './../assets/utils/logos';

const MainMenu = () => (
  <nav id="main-menu">
    <Link to="/">{displayCamXLogo()}{displayA4LogoNav()}</Link>
    <a href="https://s3.amazonaws.com/camx/documents/camx-a4-owners-manual.pdf" target="_blank" rel="noopener noreferrer" >Download PDF</a>
    {/* <Link to="/a4-systems">{displayA4LogoNav()} Systems</Link> */}
    {/* <Link to="/a4-features">{displayA4LogoNav()} Features</Link> */}
    {/* <Link to="/packages">Packages</Link> */}
    {/* <Link to="/a4-scope">Scope</Link> */}
  </nav>
);

export default MainMenu;
