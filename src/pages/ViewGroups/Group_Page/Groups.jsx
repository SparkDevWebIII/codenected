import React, { useState } from "react";
import GroupdCard from "../Group_Card/GroupCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LearnMoreButton from "../Button/LearnMoreButton";
import styles from "./GroupsStyles.scss";

// import SearchBar from "../Search_Bar/SearchBar";
import SearchBar from "../../FindProjects/SearchBar";

import DropDown from "../DropDown/DropDown";
import { useLoaderData } from "react-router-dom";
import Search from "@mui/icons-material/Search";

const Groups = () => {
  const [query, setQuery] = useState("");
  const groups = useLoaderData();

  const filteredGroups = groups.filter((group) => {
    if (group.title.toLowerCase().includes(query.toLowerCase())) {
      //returns filtered array
      return group;
    }
    return false;
  });

  const data = useLoaderData();
  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box //Container for entirety of header section
        xs={12}
        class="Header"
        style={{
          backgroundImage: `url("/assets/images/codenectedBackground.png")`,
          backgroundSize: "cover",
          left: 0,
          top: 0,
          height: "450px",
        }}
      >
        <p className="title">CodeNect With A Group</p>
        <Box sx={{width:1/2, mx:'auto'}}>
        <SearchBar query={query} setQuery={setQuery}/>
        </Box>
        
      </Box>
      <Grid container spacing={1} columnSpacing={1} className="bodySection">
        <Grid
          sx={{ mx: "auto" }}
          container
          xs={12}
          columnSpacing={4}
          rowSpacing={4}
          justifyContent="start"
        >
          {filteredGroups.map(
            ({
              group_id,
              title,
              description,
              imageUrl,
              members,
              location,
              link,
            }) => {
              return (
                <Grid item xs="auto" justifyContent="flex-end">
                  <GroupdCard
                    title={title}
                    description={description}
                    members={members}
                    location={location}
                    link={link}
                    imageUrl={imageUrl}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Groups;
