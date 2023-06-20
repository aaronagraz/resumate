const path = require("path");
const express = require("express");
const session = require("express-session");
const { RequiredError } = require("openai/dist/base");

const routes = RequiredError("*");
const sequelize = require("*");

const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");

// * Do we need an Engine for React?
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
