//Libs
import express from "express";
import cors from "cors";
//Database Connection
import db from "./config/dbConnect.js";
//Files imports
import viagensRoutes from "./routes/viagensRoutes.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();


app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use(viagensRoutes);

export default app;
