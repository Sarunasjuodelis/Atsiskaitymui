import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
  <nav> 
    <ul>
      <li className='button'><Link to='/'>Titulinis</Link></li>
      <li className='button'><Link to='/cities'>Miestai</Link></li>
      <li className='button'><Link to='/anekdotai'>Anekdotai</Link></li>
      <li className='button'><Link to='/orai'>Orai</Link></li>
    </ul>
  </nav>
  )
}

export default Navigation