/* const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samsamgt96:Z26URR26TBVweiam@monvieuxgrimoiredatabas.aexbnbi.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.log("Connexion à MongoDB échouée !", error);
  }
};

app.use(cors());
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

const usersRoutes = require("./routes/users.routes");
const booksRoutes = require("./routes/books.routes");
*/
/* app.use("/api/users", usersRoutes);
 */
/* app.use("/api.books", booksRoutes);

module.exports = app; */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

// Database connection function
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samsamgt96:Z26URR26TBVweiam@monvieuxgrimoiredatabas.aexbnbi.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connexion à MongoDB réussie!");
  } catch (error) {
    console.log("Connexion à MongoDB échouée!", error);
  }
};

// Connect to the database
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

const usersRoutes = require("./routes/users.routes");
const booksRoutes = require("./routes/books.routes");

/* app.use("/api/users", usersRoutes);
 */app.use("/api/books", booksRoutes);

module.exports = app;