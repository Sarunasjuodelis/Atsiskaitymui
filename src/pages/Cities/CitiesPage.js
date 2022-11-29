import React from 'react'
import CityItem from '../../components/CityItem/CityItem';
import cities_info from '../../data/CitiesInfo';
import './cities.css';

const CitiesPage = () => {

  const pageTitle = cities_info.length > 0 ? null : 'There are no current cities';

  return (
    <div className='cities-content'>
      <h2 className='page-title'>{pageTitle}</h2>

      {cities_info.length > 0 && (
        <div className='cities-list'>
          {cities_info.map((city, index) => <CityItem key={index} data={city} />)}
        </div>
      )}

    </div>
  )
}

export default CitiesPage