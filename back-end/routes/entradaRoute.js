// Importando as dependências
const express = require("express");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config(); // Importar variáveis de ambiente

// Configurando o Express
const app = express();
app.use(bodyParser.json());

// Configurando o Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota inicial
app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

// Rota para criar uma nova entrada
app.post("/entradas", async (req, res) => {
  try {
    const { data, error } = await supabase.from("entradas").insert(req.body);

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (err) {
    console.error("Erro ao criar entrada:", err.message);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = app;
