import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";

export default {
  title: "Components/CharacterCards",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Summer = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const allCards = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
  ];

  const container = createElement("article", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};
