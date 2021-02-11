import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";
import { getRandomArbitrary } from "../../utils/api";

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
  const characters: Character[] = [
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

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

type CharactersFromAPI = {
  loaded: {
    characters: Character[];
  };
};

export const CharactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }
) => {
  const input = createElement("input", {
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "",
    childs: [input, characterContainer],
  });

  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

type CharactersFromAPIProps = {
  loaded: {
    characters: Character[];
  };
};
export const CharactersFromAPI = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      const randomCharacter = await getCharacter(
        parseInt(getRandomArbitrary(1, 671))
      );

      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      container.append(createCard(randomCharacter));
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};
