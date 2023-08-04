import express from "express";
import db from "./config/dbConnect.js";
import viagensRoutes from "./routes/viagensRoutes.js"; // Atualize o caminho de acordo com a localização do arquivo
import cors from "cors";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

// Configurar o middleware CORS antes das rotas
app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use(viagensRoutes); // Defina o caminho base para viagensRoutes

export default app;
