import React from 'react'
import './AnekdotasItem.css';

const AnekdotaiItem = ({ data }) => {
  let { pav, apr } = data;

  return (
    <div className='anekdotas-item'>
      <h2 className='anekdotas-title'>{pav}</h2>
      {(
        <ul className='anekdotas-info-list'>
          {apr}
        </ul>
      )}
    </div>
  )
}

export default AnekdotaiItem