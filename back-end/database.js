// Importando as dependências
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config(); // Importar variáveis de ambiente

// Configurando o Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
