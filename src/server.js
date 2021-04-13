"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
console.clear();
//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
app.get("/", function (request, response) {
    response.send("Hello World com ts-node-dev teste 2!");
});
app.listen(3000, function () {
    console.log("O servidor está rodando...");
});
