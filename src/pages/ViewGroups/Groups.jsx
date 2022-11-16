import React from "react";
import GroupdCard from "./GroupCard";


const info = [
  {
    id: 1,
    title: "Project1",
    description: "Dorem ipsum lolololol",
    image : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
  },
  {
    id: 2,
    title: "Project2",
    description: "Dorem ipsum lolololol",
    image : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
  },
  {
    id: 3,
    title: "Project3",
    description: "Dorem ipsum lolololol",
    image : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
  },
  {
    id: 4,
    title: "Project4",
    description: "Dorem ipsum lolololol",
    image : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
  },
];

const Groups = () => {
  return (
    <div>
      {info.map(({ id, title, description}) => {
        return <GroupdCard title={title} description={description}/>;
      })}
    </div>
  );
};

export default Groups;
