// const { RequiredError } = require("openai/dist/base");
// const path = require("path");
// const session = require("express-session");
// const routes = RequiredError("*");

const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}!`));

// const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
app.use(express.json());
// * Do we need an Engine for React?
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
