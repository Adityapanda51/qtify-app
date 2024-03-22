import React from "react";
import "./SongCard.css"; // Import the CSS file for styling

const SongCard = ({ data, type }) => {
    switch (type) {
      case "normal":
        return (
          <div className="Album_Cont" id={data.id}>
            <div className="Album_card">
              <div className="Album_card_image">
                <img src={data.image} alt={data.title} />
              </div>
              <div className="Album_card_text">
                <h3>{data.likes} Likes</h3>
              </div>
            </div>
            <h3 className="Album_title">{data.title}</h3>
          </div>
        );
      default:
        return null;
    }
  };
  

export default SongCard;
