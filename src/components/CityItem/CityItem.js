import React from 'react'

const CityItem = (props) => {
  const { isCapital, location, name, population, touristAttractions } = props.data;
  const capitalDescription = isCapital ? ` ${name} is the capital of ${location.country}.` : '';

  const capitalText = isCapital && ' (capital)';
  const cityDescription = `${name} city is located in ${location.continent}, ${location.country} and has population of ${population} people.${capitalDescription}`;
  

  return (
    <div className='city-item'>
      <h2 className='city-name'><span>Name:</span> {name}{capitalText}</h2>
      <h3>
        {touristAttractions.length >= 1 ? 
        <span>'Main tourist attractions:'</span> 
        : 
        ''
        }
      </h3>
      <ul>
        {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
      </ul>
      <p>{cityDescription}</p>
    </div>
  )
}

export default CityItem