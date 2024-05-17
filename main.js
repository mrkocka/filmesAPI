const express = require("express");
const path = require("path");
const api = express();
let port = 8080;
const baseURL = `http://localhost:${port}`;

const listeningStartedCallback = () => {
  console.log(`A szerver elindult. Port: ${port}`);
};
api.listen(port, listeningStartedCallback);

api.use(express.static(path.join(__dirname, "kepek")));

// JSON üzenet
let idezetek = [
  {
    id: 1,
    idézet: "Az erő legyen veled.",
    film_címe: "Star Wars",
    év: 1979,
    kep: `${baseURL}/starwars.png`,
  },
  {
    id: 2,
    idézet: "Visszajövök!",
    film_címe: "The Terminator",
    év: 1984,
    kep: `${baseURL}/terminator.png`,
  },
  {
    id: 3,
    idézet: "A végtelenbe és tovább!",
    film_címe: "Toy Story",
    év: 1995,
    kep: `${baseURL}/toystory.png`,
  },
  {
    id: 4,
    idézet: "Én vagyok a világ királya!",
    film_címe: "Titanic",
    év: 1997,
    kep: "http://localhost:8080/titanic.png",
    kep: `${baseURL}/titanic.png`,
  },
  {
    id: 5,
    idézet: "Puska kellet volna...",
    film_címe: "Ponyvaregény",
    év: 1994,
    kep: "http://localhost:8080/",
    kep: `${baseURL}/ponyvaregeny.png`,
  },
  {
    id: 6,
    idézet: "Te Magasságos!",
    film_címe: "Vissza a Jövőbe",
    év: 1985,
    kep: `${baseURL}/vaj.png`,
  },
  {
    id: 7,
    idézet: "Bent vagyok!",
    film_címe: "Mátrix",
    év: 1999,
    kep: `${baseURL}/matrix.png`,
  },
  {
    id: 8,
    idézet: "Meghalt, Jam.",
    film_címe: "Star Trek",
    év: 1966,
    kep: `${baseURL}/startrek.png`,
  },
  {
    id: 9,
    idézet: "Columbo",
    film_címe: "Csak még egy kérdés...",
    év: 1968,
    kep: `${baseURL}/columbo.png`,
  },
  {
    id: 10,
    idézet: "Világjegy",
    film_címe: "Az Ötödik eleme",
    év: 1997,
    kep: `${baseURL}/otodikelem.png`,
  },
];
// Összes idézet lekérdezése
api.get("/api/idezetek", (req, res) => {
  res.send(idezetek);
});
// Paraméteres lekérdezés: a paraméter előtt kettőspont.
// Elérése kódból: req.params.id

api.get("/api/idezetek/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  console.log(`Kérés érkezett idezetek ${id}`);
  const idezet = idezetek.find((idezet) => idezet.id === id);
  if (typeof idezet === "undefined") {
    res.send([]);
  } else {
    res.send(idezet);
  }
});
