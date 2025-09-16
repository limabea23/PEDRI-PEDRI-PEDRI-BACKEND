require("dotenv").config();
const express = require("express");
const cors = require("cors");

const listagemRoutes = require("./src/routes/listagemRoutes");
const detalhesRoutes = require("./src/routes/detalhesRoutes");
const galeriaRoutes = require("./src/routes/galeriaRoutes");
const noticiasRoutes = require("./src/routes/noticiasRoutes");

const app = express();
const path = require("path");
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", listagemRoutes);
app.use("/api", detalhesRoutes);
app.use("/api", galeriaRoutes);
app.use("/api", noticiasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Suuucessoooo, servidor rodando na porta ${PORT} 💗🌟🤠💋`);
});