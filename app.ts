import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const temporaryFruitArray = [
  {
    name: "Apples",
    image: "appleimage",
    price: 2.44,
  },
  {
    name: "Oranges",
    image: "orangeimage",
    price: 2.44,
  },
  {
    name: "Peaches",
    image: "peachimage",
    price: 2.44,
  },
  {
    name: "Pears",
    image: "pearimage",
    price: 2.44,
  },
  {
    name: "Blueberries",
    image: "blueberryimage",
    price: 2.44,
  },
  {
    name: "Strawberries",
    image: "strawberryimage",
    price: 2.44,
  },
  {
    name: "Cherries",
    image: "cherryimage",
    price: 2.44,
  },
  {
    name: "Lemons",
    image: "lemonimage",
    price: 2.44,
  },
];

app.get("/fruitshopapi/allfruits", (req, res) => {
  res.json(temporaryFruitArray);
});

const server = app.listen(8080, () => console.log("Server is running"));

export default server;
