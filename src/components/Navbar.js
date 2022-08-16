import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
const Navbar = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'Home',
    },
    {
      id: 2,
      url: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      url: '/Quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar">
      <h1 className="navHead">Math Magicians</h1>

      <ul className="navMenu">
        {urls.map((url) => (
          <li key={url.id}>
            <NavLink to={url.url}>{url.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
