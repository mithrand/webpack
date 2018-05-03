import * as React from 'react';
import './styles/App.scss';
import * as AppTypes from './types/AppTypes';
import NavBar from 'components/NavBar';
import AppContent from './AppContent';

// required images and fonts
const headerDecorator = require('images/header-decorator.png');
const logoSvg = require('images/logo.svg');
const favicon = require('images/favicon.ico');
const iconttf = require('fonts/sonemo-icons.ttf');
const iconsWoff = require('fonts/sonemo-icons.woff');
const favicon32 = require('images/favicon-32x32.png');
const favicon64 = require('images/favicon-16x16.png');

export const app = (props: AppTypes.AppProps) => {
  const { location:{ pathname }, children } = props;
  return (
    <div className="core-layout">
      <div className="content-wrap">
        <img className="header-decorator" src={headerDecorator} />
        <NavBar currentLocation={pathname} />
        <AppContent/>
      </div>
    </div>
  );
};

export default app;
