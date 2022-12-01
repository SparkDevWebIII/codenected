import React from "react";
import GroupdCard from "../Group_Card/GroupCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LearnMoreButton from "../Button/LearnMoreButton";
import styles from "./GroupsStyles.scss";

import SearchBar from "../Search_Bar/SearchBar";
import DropDown from "../DropDown/DropDown";

const info = [
  {
    id: 1,
    name: "Project1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
  {
    id: 2,
    name: "Project2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
  {
    id: 3,
    name: "Project3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
  {
    id: 4,
    name: "Project4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
  {
    id: 4,
    name: "Project4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
  {
    id: 4,
    name: "Project4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    splash:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    location: "Miami, FL",
    members: 12,
  },
];

const Groups = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>        
      <Box            //Container for entirety of header section
        xs={12}
        class="Header"
        style={{
          backgroundImage: `url("assets/images/codenectedBackground.png")` ,
          backgroundSize: "cover",
          left: 0,
          top: 0,
          height: "450px",
        }}
      >
        <p className="title">CodeNect With A Group</p>
        <SearchBar />         
      </Box>
      <Grid
        container
        spacing={1}
        columnSpacing={1}
        
        className="bodySection"
      >
        
        <Grid
          container
          xs={12}
          columnSpacing={4}
          rowSpacing={4}
          justifyContent="center"
        >
          {info.map(({ id, name, description, splash, members, location }) => {
            return (
              <Grid item xs="auto" justifyContent="flex-end">
                <GroupdCard
                  name={name}
                  description={description}
                  members={members}
                  location={location}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>

    // <div>
    //   {info.map(({ id, title, description}) => {
    //     return <GroupdCard title={title} description={description}/>;
    //   })}
    // </div>
  );
};

export default Groups;
