// Importando as dependências
const express = require("express");
const bodyParser = require("body-parser");
const entradaRoute = require("./routes/entradaRoute");
const { supabase } = require("./database");

// Configurando o Express
const app = express();
app.use(bodyParser.json());

// Usando as rotas
app.use("/", entradaRoute);
// app.use('/path, routes.rotaQueVocêCriou);


// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
