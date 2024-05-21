import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";
import studentRoutes from "./routes/student.routes.js"
import { connectMongoDB } from "./config/mongoDb.config.js";

// base de datos
connectMongoDB();

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine()); 
app.set("views", __dirname + "/views"); 
app.set("view engine", "handlebars"); 

app.use("/", studentRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});