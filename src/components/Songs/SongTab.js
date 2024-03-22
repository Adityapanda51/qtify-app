// import React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function SongTab() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//   );
// }
//.........................................................................................................

// import React, { useEffect, useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { genresData, songsData } from '../AxiosData/AxiosData'; // Adjust the path accordingly

// function CustomTabPanel({ children, value, index }) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default function SongTab() {
//   const [value, setValue] = useState(0);
//   const [genres, setGenres] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genreData = await genresData();
//         const songData = await songsData();

//         if (genreData && Array.isArray(genreData.data) && Array.isArray(songData)) {
//           setGenres(genreData.data);
//           setSongs(songData);
//           setLoading(false);
//         } else {
//           console.error("Invalid data format");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           {genres.map((genre, index) => (
//             <Tab key={index} label={genre.label} />
//           ))}
//         </Tabs>
//       </Box>
//       {genres.map((genre, index) => (
//         <CustomTabPanel key={index} value={value} index={index}>
//           {songs
//             .filter(song => song.genre === genre.key)
//             .map((song, i) => (
//               <div key={i}>
//                 <Typography>{song.title}</Typography>
//                 <Typography>{song.artist}</Typography>
//               </div>
//             ))}
//         </CustomTabPanel>
//       ))}
//     </Box>
//   );
// }

//.......................................................................................

// import React, { useEffect, useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { genresData, songsData } from '../AxiosData/AxiosData'; // Adjust the path accordingly
// import './SongTab.css'; // Import the CSS file

// function CustomTabPanel({ children, value, index }) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default function SongTab() {
//   const [value, setValue] = useState(0);
//   const [genres, setGenres] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genreData = await genresData();
//         const songData = await songsData();

//         if (genreData && Array.isArray(genreData.data) && Array.isArray(songData)) {
//           setGenres(genreData.data);
//           setSongs(songData);
//           setLoading(false);
//         } else {
//           console.error("Invalid data format");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           {genres.map((genre, index) => (
//             <Tab key={index} label={genre.label} className="tabLabel" />
//           ))}
//         </Tabs>
//       </Box>
//       {genres.map((genre, index) => (
//         <CustomTabPanel key={index} value={value} index={index}>
//           {songs
//             .filter(song => song.genre === genre.key)
//             .map((song, i) => (
//               <div key={i}>
//                 <Typography>{song.title}</Typography>
//                 <Typography>{song.artist}</Typography>
//               </div>
//             ))}
//         </CustomTabPanel>
//       ))}
//     </Box>
//   );
// }


//........................................................................................................



//......................................................................................................



// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import { genresData, songsData } from "../AxiosData/AxiosData";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Carousel from "../Carousel/Carousel";
// import SongCard from "./SongCard/SongCard";

// function CustomTabPanel({ value, index, songs, genres }) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <div>
//           {/* If index is not 0 (All Songs), render songs based on genre */}
//           {index === 0 ? (
//             <Carousel
//               data={songs}
//               component={(song) => <SongCard data={song} type="normal" />}
//             />
//           ) : (
//             <Carousel
//               data={songs.filter((song) => song.genre.key === genres[index - 1].key)}
//               component={(song) => <SongCard data={song} type="normal" />}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SongTab() {
//   const [value, setValue] = useState(0);
//   const [genres, setGenres] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genreData = await genresData();
//         const songData = await songsData();

//         if (
//           genreData &&
//           Array.isArray(genreData.data) &&
//           Array.isArray(songData)
//         ) {
//           setGenres(genreData.data);
//           setSongs(songData);
//           setLoading(false);
//         } else {
//           console.error("Invalid data format");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: "#34c94b",
//               height: 4,
//               borderRadius: 2,
//             },
//           }}
//         >
//           <Tab
//             label="All"
//             style={{
//               color: value === 0 ? "white" : "white",
//             }}
//           />
//           {genres.map((genre, index) => (
//             <Tab
//               key={index}
//               label={genre.label}
//               style={{
//                 color: value === index + 1 ? "white" : "white",
//               }}
//             />
//           ))}
//         </Tabs>
//       </Box>
//       {genres.map((genre, index) => (
//         <CustomTabPanel
//           key={index}
//           value={value}
//           index={index}
//           songs={songs}
//           genres={genres}
//         />
//       ))}
//     </Box>
//   );
// }



// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import { genresData, songsData } from "../AxiosData/AxiosData";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Carousel from "../Carousel/Carousel";
// import SongCard from "./SongCard/SongCard";

// function CustomTabPanel({ value, index, songs, genres }) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <div>
//           {/* If index is not 0 (All Songs), render songs based on genre */}
//           <Carousel
//             data={
//               index === 0 ? songs : songs.filter(song => song.genre.key === genres[index - 1].key)
//             }
//             component={(song) => <SongCard data={song} type="normal" />}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SongTab() {
//   const [value, setValue] = useState(0);
//   const [genres, setGenres] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genreData = await genresData();
//         const songData = await songsData();

//         if (
//           genreData &&
//           Array.isArray(genreData.data) &&
//           Array.isArray(songData)
//         ) {
//           setGenres(genreData.data);
//           setSongs(songData);
//         } else {
//           console.error("Invalid data format");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: "#34c94b",
//               height: 4,
//               borderRadius: 2,
//             },
//           }}
//         >
//           <Tab
//             label="All"
//             style={{
//               color: value === 0 ? "white" : "white",
//             }}
//           />
//           {genres.map((genre, index) => (
//             <Tab
//               key={index}
//               label={genre.label}
//               style={{
//                 color: value === index + 1 ? "white" : "white",
//               }}
//             />
//           ))}
//         </Tabs>
//       </Box>
//       {genres.map((genre, index) => (
//         <CustomTabPanel
//           key={index}
//           value={value}
//           index={index}
//           songs={songs}
//           genres={genres}
//         />
//       ))}
//     </Box>
//   );
// }


import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { genresData, songsData } from "../AxiosData/AxiosData";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import SongCard from "./SongCard/SongCard";

function CustomTabPanel({ value, index, songs, genres }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div>
          {/* If index is not 0 (All Songs), render songs based on genre */}
          <Carousel
            data={
              index === 0
                ? songs
                : songs.filter((song) => song.genre.key === genres[index - 1]?.key)
            }
            component={(song) => <SongCard data={song} type="normal" />}
          />
        </div>
      )}
    </div>
  );
}

export default function SongTab() {
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreData = await genresData();
        const songData = await songsData();

        if (
          genreData &&
          Array.isArray(genreData.data) &&
          Array.isArray(songData)
        ) {
          setGenres(genreData.data);
          setSongs(songData);
        } else {
          console.error("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34c94b",
              height: 4,
              borderRadius: 2,
            },
          }}
        >
          <Tab
            label="All"
            style={{
              color: value === 0 ? "white" : "white",
            }}
          />
          {genres.map((genre, index) => (
            <Tab
              key={index}
              label={genre.label}
              style={{
                color: value === index + 1 ? "white" : "white",
              }}
            />
          ))}
        </Tabs>
      </Box>
      {genres.map((genre, index) => (
        <CustomTabPanel
          key={index}
          value={value}
          index={index}
          songs={songs}
          genres={genres}
        />
      ))}
    </Box>
  );
}



