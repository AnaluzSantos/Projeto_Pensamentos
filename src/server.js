// const { response } = require("express");
const express = require("express")
const exphbs = require("express-handlebars")

require("./database/index");
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Importar as rotas
const thoughtRoutes = require("./routes/thoughtsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// Importa engine handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/"));

// Utilização de arquivos estáticos
app.use(express.static(__dirname + '/public'));

exphbs.create({
    partialsDir: path.join(__dirname + "views/partials")
});

// Utilizar os arquivos de rotas
app.use(thoughtRoutes);
app.use(usersRoutes);


app.listen(3333, console.log("Servidor ta pegando na porta 3333 💕"));