"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const temporaryFruitArray = [
    {
        name: "Apples",
        image: "appleimage",
        price: "$2.44",
    },
    {
        name: "Oranges",
        image: "orangeimage",
        price: "$2.44",
    },
    {
        name: "Peaches",
        image: "peachimage",
        price: "$2.44",
    },
    {
        name: "Pears",
        image: "pearimage",
        price: "$2.44",
    },
    {
        name: "Blueberries",
        image: "blueberryimage",
        price: "$2.44",
    },
    {
        name: "Strawberries",
        image: "strawberryimage",
        price: "$2.44",
    },
    {
        name: "Cherries",
        image: "cherryimage",
        price: "$2.44",
    },
    {
        name: "Lemons",
        image: "lemonimage",
        price: "$2.44",
    },
];
app.get("/allfruits", (req, res) => {
    res.json(temporaryFruitArray);
});
const server = app.listen(8080, () => console.log("Server is running"));
exports.default = server;
