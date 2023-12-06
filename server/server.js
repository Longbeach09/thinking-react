import express from "express"; //make sure its lowercase
import ViteExpress from "vite-express";
import morgan from "morgan"; //helps with more accurate console.logs  install with npm i

//set up an express instance called 'app'
const app = express();

// Set up middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //helps with incription
app.use(express.static("public"));
app.use(express.json());

//Import handlerfunctions
import handlerFunctions from "./controller.js";

//Routes go here
app.get("/invoices", handlerFunctions.getInvoices);
app.post("/addInvoice", handlerFunctions.addInvoice);
app.delete("/deleteInvoice/:id", handlerFunctions.deleteInvoice);
app.put("/editInvoice/:id", handlerFunctions.editInvoice);
//open up a door to the server

ViteExpress.listen(app, 7000, () =>
  console.log(`We've got a 7000! Report to http://localhost:7000`)
);
