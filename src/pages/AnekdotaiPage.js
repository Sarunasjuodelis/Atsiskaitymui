import React, { useState } from "react";
import AnekdotaiItem from "../components/AnekdotasItem/AnekdotasItem";
import jokes_list from "../data/JokesList";
const AnekdotaiPage = () => {

  return (
    <div className="page-content">

      <h2 className="page-title">{jokes_list.length > 0 ? "Anekdotai:" : "No cars :("}</h2>

      {jokes_list.length > 0 && (
        <div className="anekdotas-list">
          {jokes_list.map((joke, index) => (
            <AnekdotaiItem key={index} data={joke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnekdotaiPage;
