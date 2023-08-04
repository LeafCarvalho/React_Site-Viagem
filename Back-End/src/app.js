import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from 'cors'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

// Configurar o middleware CORS antes das rotas
app.use(cors({
  origin: "*"
}));

app.use(express.json());
routes(app);

export default app;