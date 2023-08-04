import express from "express";
import db from "./config/dbConnect.js";
import viagensRoutes from "./routes/viagensRoutes.js";
import cors from "cors";

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
