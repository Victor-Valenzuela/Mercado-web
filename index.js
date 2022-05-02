const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(express.static(__dirname + '/public/assets'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/public/assets/css'));

app.set("view engine", "handlebars");

app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.get("/", (_req, res) => {
    res.render("dashboard", {
        layout: "app",
        productos: [
            'Bananas',
            'Cebollas',
            'Lechuga',
            'Papas',
            'Pimentones',
            'Tomate',
        ]
    });
});