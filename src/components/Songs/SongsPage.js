// import React, { useState, useEffect } from "react";
// import { songsData } from "../AxiosData/AxiosData"; // Import the function to fetch songs data
// import Box from "@mui/material/Box";
// import "./SongsPage.css"; // Import CSS for styling
// import Carousel from "../Carousel/Carousel";
// import SongCard from "./SongCard/SongCard";
// import SongTab from "./SongTab";

// const SongsSection = () => {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     const loadHandler = async () => {
//       try {
//         // Fetch songs data
//         const res = await songsData();
//         setSongs(res);
//       } catch (error) {
//         console.log("Error fetching song data:", error);
//       }
//     };
//     loadHandler();
//   }, []);

//   return (
//     <Box className="songs-section">
//       <div className="songs-section-static">
//         <h3>Songs</h3>
//         <SongTab />
//       </div>
//       <Carousel
//         data={songs}
//         component={(song) => <SongCard data={song} type="normal" />}
//       />
//     </Box>
//   );
// };

// export default SongsSection;



//.......................................................................................................


// import React, { useState, useEffect } from "react";
// import { songsData } from "../AxiosData/AxiosData"; // Import the function to fetch songs data
// import Box from "@mui/material/Box";
// import "./SongsPage.css"; // Import CSS for styling
// import Carousel from "../Carousel/Carousel";
// import SongCard from "./SongCard/SongCard";
// import SongTab from "./SongTab";

// const SongsSection = () => {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     const loadHandler = async () => {
//       try {
//         // Fetch songs data
//         const res = await songsData();
//         setSongs(res);
//       } catch (error) {
//         console.log("Error fetching song data:", error);
//       }
//     };
//     loadHandler();
//   }, []);

//   return (
//     <Box className="songs-section newAlbum"> {/* Apply the newAlbum class */}
//       <div className="songs-section-static newAlbum_static"> {/* Apply the newAlbum_static class */}
//         <h3 className="newAlbum_title">Songs</h3> {/* Apply the newAlbum_title class */}
       
//       </div>
//       <SongTab />
//       <Carousel
//         data={songs}
//         component={(song) => <SongCard data={song} type="normal" />}
//         className="newAlbum_cards" 
//       />
//     </Box>
//   );
// };

// export default SongsSection;

//.................................................................................

import React, { useState, useEffect } from "react";
import { songsData } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import "./SongsPage.css";
import SongTab from "./SongTab"; // Import the SongTab component

const SongsSection = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await songsData();
        setSongs(res);
      } catch (error) {
        console.log("Error fetching song data:", error);
      }
    };
    loadHandler();
  }, []);

  return (
    <Box className="songs-section newAlbum">
      <div className="songs-section-static newAlbum_static">
        <h3 className="newAlbum_title">Songs</h3>
      </div>
      {/* Render the SongTab component */}
      <SongTab />
    </Box>
  );
};

export default SongsSection;
