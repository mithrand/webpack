import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.scss';
import { NavBarProps } from './types/NavBarTypes';
import sectionsConfig from 'globals/SectionsConfig';
import * as classNames from 'classnames';




export const NavBar = (props:NavBarProps) => {
  const { currentLocation } = props;

  const linkClasses = (routePath:string) => classNames({
    'navbar-entry':true,
    'active': false,
  });

  const iconClasses = (icon:string) => classNames({
    'icon':true,
     [`icon-${icon}`]:true,
  })

  const sectionsLinks = sectionsConfig.map(section => {
    const { routePath,icon,title } = section;
    return(
      <Link to={routePath} className={linkClasses(routePath)}>
        <span className={iconClasses(icon)} />
        <div className="navbar-label">{title}</div>
      </Link>
    );
  })

  return(
  <nav className="navbar">
    <Link to="/" className={linkClasses(currentLocation)}>
      <span className={iconClasses('logo')} />
    </Link>
    {sectionsLinks}
  </nav>
  );
};

export default NavBar;
