// import React, { useEffect, useState } from "react";
// import { topAlbumData, getUId } from "../AxiosData/AxiosData";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Card from "../Card/Card";
// import "./TopAlbum.css";

// /**
//  * Represents the TopAlbum component.
//  * Displays a list of top albums and includes a "Show all" button to toggle the view.
//  * @returns {JSX.Element} The rendered TopAlbum component.
//  */
// const TopAlbum = () => {
//   // Define the albumData state to store the fetched album data
//   const [albumData, setAlbumData] = useState([]);

//   // Define the collapseView state to determine whether the view is collapsed or not
//   const [collapseView, setCollapseView] = useState(true);

//   // Fetch the top album data when the component is rendered
//   useEffect(() => {
//     const loadHandler = async () => {
//       try {
//         // Fetch the top album data using the topAlbumData function from AxiosData
//         const res = await topAlbumData();
//         // Update the albumData state with the fetched data
//         setAlbumData(res);
//       } catch (error) {
//         console.log("Error fetching top album data:", error);
//       }
//     };
//     // Call the loadHandler function
//     loadHandler();
//   }, []);

//   /**
//    * Handles the click event of the "Show all" button.
//    * Toggles the collapse view state.
//    */
//   const handleOnClick = () => {
//     setCollapseView(!collapseView);
//   };

//   return (
//     <Box className="topAlbum">
//       <div className="topAlbum_static">
//         <h3>Top Albums</h3>
//         <button onClick={handleOnClick}>
//           {collapseView ? `Show all` : `Collapse`}
//         </button>
//       </div>
//       <Grid
//         container
//         spacing={collapseView ? 2 : 2}
//         style={{ paddingLeft: collapseView ? "30px" : "15px" }}
//         className="topAlbum_cards"
//       >
//         {/* Render the cards based on the collapse view */}
//         {albumData.map((albumItem, index) => {
//           // Generate a unique id for each card
//           const id = getUId();

//           // Determine whether to display the card based on the collapse view
//           if (collapseView) {
//             return (
//               <Grid
//                 style={{ display: collapseView && index < 6 ? "block" : "none" }}
//                 item xs={2}>
//                 <Card key={id} data={albumItem} type="normal" />
//               </Grid>
//             );
//           } else if (!collapseView) {
//             return (
//               <Grid
//                 item xs={2}>
//                 <Card key={id} data={albumItem} type="normal" />
//               </Grid>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default TopAlbum;






import React, { useEffect, useState } from "react";
import { topAlbumData } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import "./TopAlbum.css";
import Carousel from "../Carousel/Carousel"; // Import the Carousel component

const TopAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await topAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching top album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  return (
    <Box className="topAlbum">
      <div className="topAlbum_static">
        <h3>Top Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      {collapseView ? (
        <Carousel
          data={albumData} // Pass album data as prop to Carousel
          component={(albumItem) => (
            <Card data={albumItem} type="normal" />
          )} // Pass Card component as component prop to Carousel
        />
      ) : (
        <div className="topAlbum_grid">
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

export default TopAlbum;

