import React, { useEffect, useState } from "react";
import { newAlbumData } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import "./NewAlbum.css";
import Carousel from "../Carousel/Carousel";

const NewAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await newAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching new album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  return (
    <Box className="newAlbum">
      <div className="newAlbum_static">
        <h3>New Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      {collapseView ? (
        <Carousel
          data={albumData}
          component={(albumItem) => (
            <Card data={albumItem} type="normal" />
          )}
        />
      ) : (
        <div className="newAlbum_grid">
          {albumData.map((albumItem) => (
            <div key={albumItem.id} className="gridItem">
              <Card data={albumItem} type="normal" />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};

export default NewAlbum;
