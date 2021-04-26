import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <ul>
            <li><Link to="/formcep">FormCep</Link></li>
            <li><Link to="/dragonballmanager">Manager</Link></li>
        </ul>
    </div>
  );
}

export default Layout;