import * as React from 'react';
import { IndexLink, Link } from 'react-router';
import './NavBar.scss';
import { NavBarProps } from './types/NavBarTypes';

const guessClassName = (currentLocation:string, matchLocation:string, strict:boolean) => {
  if (strict) {
    return (currentLocation === matchLocation) ? 'navbar-entry active' : 'navbar-entry';
  } 
  return (currentLocation.indexOf(matchLocation) === 0) ? 'navbar-entry active' : 'navbar-entry';
};

export const NavBar = (props:NavBarProps) => {
  const { currentLocation } = props;
  return(
  <nav className="navbar">
    <IndexLink to="/" className={guessClassName(currentLocation, '/', true)}>
      <span className="icon icon-logo" />
    </IndexLink>
    <Link to="/alerts" className={guessClassName(currentLocation, '/alerts',false)}>
      <span className="icon icon-alerts" />
      <div className="navbar-label">Alerts</div>
    </Link>
    <Link to="/ips" className={guessClassName(currentLocation, '/ips',false)}>
      <span className="icon icon-ips" />
      <div className="navbar-label">IPs</div>
    </Link>
    <Link to="/domains" className={guessClassName(currentLocation, '/domains', false)}>
      <span className="icon icon-domains" />
      <div className="navbar-label">Domains</div>
    </Link>
    <Link to="/certificates" className={guessClassName(currentLocation, '/certificates', false)}>
      <span className="icon icon-certificates" />
      <div className="navbar-label">Certs</div>
    </Link>
    <Link to="/github" className={guessClassName(currentLocation, '/github', false)}>
      <span className="icon icon-github" />
      <div className="navbar-label">GitHub</div>
    </Link>
    <Link to="/pastebin" className={guessClassName(currentLocation, '/pastebin', false)}>
      <span className="icon icon-pastebin" />
      <div className="navbar-label">Pastebin</div>
    </Link>
    <Link to="/email" className={guessClassName(currentLocation, '/email', false)}>
      <span className="icon icon-emails" />
      <div className="navbar-label">Emails</div>
    </Link>
  </nav>
  );
};

export default NavBar;
