import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__inner",
        childs: [
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("img", {
                className: "card__portrait",
                src: imgSrc,
              }),
              createElement("div", {
                className: "card__info",
                childs: [
                  createElement("h2", {
                    className: "info__name",
                    innerText: name,
                  }),
                  createElement("p", {
                    className: "card__status",
                    innerText: `${status === "Alive" ? "🫀" : "💀"} - ${status}`,
                  }),
                  createElement("p", {
                    className: "info__species",
                    innerText: species,
                  }),
                  createElement("p", {
                    className: "info__origin",
                    innerText: origin.name,
                  }),
                ],
              }),
            ],
          }),

          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                className: "backtext",
                innerText: "Das sieht ja schonmal gar nicht gut aus",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
